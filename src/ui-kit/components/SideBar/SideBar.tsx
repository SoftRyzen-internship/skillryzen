import { useState, useEffect, useRef } from 'react';
import { useCurrentWidth, useOutsideClick } from 'hooks';

import { SideBarContext } from 'modules/Sidebar/context/sideBarContext';
import { useAdaptiveSideBarContext } from 'context/adaptiveSideBarContext';

import { Theme } from 'constants/types';
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
  const { showSideBar, setShowSideBar } = useAdaptiveSideBarContext();
  const currentWidth = useCurrentWidth();

  useOutsideClick(ref, (isInside, event) => {
    const button = document.getElementById('sidebar-open-button');
    if (!button.contains(event.target as Node)) {
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

  const setClassNameSidebar = () => {
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

  const setClassNameIconArrow = () => {
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
      <div className={setClassNameSidebar()} style={{ top: top }}>
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
            <ICONS.ARROW_LEFT className={setClassNameIconArrow()} />
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
