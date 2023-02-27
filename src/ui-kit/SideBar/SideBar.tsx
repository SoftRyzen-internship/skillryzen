import { useState } from 'react';

import s from './SideBar.module.scss'

import { Menu } from '@ui-kit/Menu/Menu'

const menu = [
  {
    title: 'Dashboard',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/',
  },
  {
    title: 'Certification',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/router',
  },
  {
    title: 'Petprojects',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routea',
  },
  {
    title: 'Leaderboard',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routed',
  },
  {
    title: 'Vacancies',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routes',
  },
  {
    title: 'Profile',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routesa',
  },
  {
    title: 'Settings',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routesg',
  },
  {
    title: 'Feedback',
    icon: 'someicon.svg',
    iconAlt: 'someicon',
    path: '/routese',
  },
]

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className={isOpen ? s.sideBarIsOpen : s.slideBarIsClosed}>
            <div className={s.sideBar__companyBlock}>
                <img height='32' width='32'/>
                {isOpen && <p className={s.sideBar__companyTitle}>Name of company</p>}
                <button className={s.sideBar__companyBtn}>
                    <img height='24' width='24'/>
                </button>
            </div>
            <button className={s.sideBar__btn} onClick={() => setIsOpen(!isOpen)}>
                <img/>
            </button>
            <Menu menu={menu} isOpen={isOpen}/>
        </div>
    )
}