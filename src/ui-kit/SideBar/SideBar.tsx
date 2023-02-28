import { useState } from 'react';

import { SideBarContext } from '../../context/sideBarContext';

import s from './SideBar.module.scss';

interface SideBarProps {
  children : React.ReactNode[];
  spaceBetween?: string;
}

export const SideBar = ({children, spaceBetween}: SideBarProps) => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={isOpen ? s.sideBarIsOpen : s.slideBarIsClosed}>
            {/* <div className={s.sideBar__companyBlock}>
                <img height='32' width='32'/>
                {isOpen && <p className={s.sideBar__companyTitle}>Name of company</p>}
                <button className={s.sideBar__companyBtn}>
                    <img height='24' width='24'/>
                </button>
            </div> */}
            <button className={s.sideBar__btn} onClick={() => setIsOpen(!isOpen)}>
                <img src='' alt='close-button'/>
            </button>
            <SideBarContext.Provider value={isOpen}>
              <div className={s.sideBar__listWrapper} style={{gap: spaceBetween}}>
                {children}
              </div>
            </SideBarContext.Provider>
        </div>
    )
}