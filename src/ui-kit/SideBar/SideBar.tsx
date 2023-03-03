import { useState } from 'react';

import { SideBarContext } from 'modules/Sidebar/context/sideBarContext';
import { Theme } from 'modules/common/types';
import { ICONS } from 'theme';

import s from './SideBar.module.scss';

interface SideBarProps {
  children: React.ReactNode[];
  spaceBetween?: string;
  theme?: Theme;
  sticky?: boolean;
  top?: string;
}

export const SideBar = ({
  children,
  spaceBetween,
  theme = 'dark',
  sticky,
  top = '0',
}: SideBarProps) => {
  const [isOpen, setIsOpen] = useState(true);

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

  return (
    <div
      style={
        sticky ? { height: 'auto' } : { height: '100%' }
      }
    >
      <div className={setClassnameSidebar()} style={{top: top}}>
        {/* <div className={s.sideBar__companyBlock}>
                  <img height='32' width='32'/>
                  {isOpen && <p className={s.sideBar__companyTitle}>Name of company</p>}
                  <button className={s.sideBar__companyBtn}>
                      <img height='24' width='24'/>
                  </button>
              </div> */}
        <button
          className={
            theme === 'dark' ? s.sideBar__btnDark : s.sideBar__btnLight
          }
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <ICONS.ARROW_LEFT className={setClassnameIconArrow()} />
        </button>
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
