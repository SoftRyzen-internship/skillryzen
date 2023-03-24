import { useState, useEffect, useRef } from 'react';
import { useCurrentWidth, useOutsideClick } from 'hooks';

import { SideBarContext } from 'modules/Sidebar/context/sideBarContext';
import { useAdavtipeSideBarContext } from 'context/adavtipeSideBarContext';

import { Theme } from 'constans/types';
import { ICONS } from 'ui-kit/icons';

import s from './SideBar.module.scss';

interface SideBarProps {
  children: React.ReactNode[];
  spaceBetween?: string;
  theme?: Theme;
  top?: string;
}

export const SideBar = ({
  children,
  spaceBetween,
  theme = 'dark',
  top = '0',
}: SideBarProps) => {
  const [isOpen, setIsOpen] = useState(() => {
    const savedValue = localStorage.getItem('sideBarIsOpen');
    return savedValue ? (savedValue === 'true' ? true : false) : true;
  });
  const ref = useRef<HTMLDivElement>();
  const { showSideBar, setShowSideBar } = useAdavtipeSideBarContext();
  const currentWidth = useCurrentWidth();

  useOutsideClick(ref, (isInside, event) => {
    const button = document.getElementById('sidebar-open-button');
    const icon = document.getElementById('sidebar-open-icon');
    if (event.target !== button && event.target !== icon) {
      setShowSideBar(isInside);
    }
  });

  useEffect(() => {
    if (currentWidth < 1280) {
      setIsOpen(true);
    }
  }, [currentWidth]);

  useEffect(() => {
    if (currentWidth >= 1280) {
      showSideBar && setShowSideBar(false);
    }
  }, [currentWidth, setShowSideBar, showSideBar]);

  const setClassnameSidebar = () => {
    if (isOpen) {
      if (theme === 'dark') {
        return s.sideBarIsOpenDark;
      }
      if (theme === 'light') {
        return s.sideBarIsOpenLight;
      }
    }

    if (!isOpen) {
      if (theme === 'dark') {
        return s.slideBarIsClosedDark;
      }
      if (theme === 'light') {
        return s.slideBarIsClosedLight;
      }
    }
  };

  const setClassnameIconArrow = () => {
    if (isOpen) {
      if (theme === 'dark') {
        return s.sideBar__iconOpenDark;
      }
      if (theme === 'light') {
        return s.sideBar__iconOpenLight;
      }
    }

    if (!isOpen) {
      if (theme === 'dark') {
        return s.slideBar__iconClosedDark;
      }
      if (theme === 'light') {
        return s.slideBar__iconClosedDark;
      }
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    localStorage.setItem('sideBarIsOpen', String(!isOpen));
  };

  return (
    <div
      ref={ref}
      className={`${s.sideBar} ${showSideBar && s.openAdaptiveSideBar}`}
    >
      <div className={setClassnameSidebar()} style={{ top: top }}>
        {/* <div className={s.sideBar__companyBlock}>
                  <img height='32' width='32'/>
                  {isOpen && <p className={s.sideBar__companyTitle}>Name of company</p>}
                  <button className={s.sideBar__companyBtn}>
                      <img height='24' width='24'/>
                  </button>
              </div> */}
        {currentWidth > 1279 && (
          <button
            className={
              theme === 'dark' ? s.sideBar__btnDark : s.sideBar__btnLight
            }
            onClick={handleClick}
          >
            <ICONS.ARROW_LEFT className={setClassnameIconArrow()} />
          </button>
        )}

        <SideBarContext.Provider value={isOpen}>
          <div
            className={s.sideBar__listWrapper}
            style={{ justifyContent: spaceBetween }}
          >
            {children}
          </div>
        </SideBarContext.Provider>
      </div>
    </div>
  );
};
