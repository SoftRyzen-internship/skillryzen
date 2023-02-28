import React from 'react';

import { SideBar } from 'ui-kit/SideBar/SideBar';
import { Menu } from 'ui-kit/Menu/Menu';

import { ICONS } from 'theme';

function generateId() {    
  return Math.random().toString(36).substring(2) +
    (new Date()).getTime().toString(36);
}

const menu = [
  {
    title: 'Dashboard',
    icon: ICONS.DIPLOMA,
    iconAlt: 'dashboard',
    path: '/',
  },
  {
    title: 'Certification',
    icon: ICONS.DIPLOMA,
    iconAlt: 'Certification',
    path: '/tests',
  },
  {
    title: 'Petprojects',
    icon: ICONS.FILES,
    iconAlt: 'Petprojects',
    path: '/routea',
  },
  {
    title: 'Leaderboard',
    icon: ICONS.TROPHY,
    iconAlt: 'Leaderboard',
    path: '/routed',
  },
  {
    title: 'Vacancies',
    icon: ICONS.CASE_ROUND,
    iconAlt: 'Vacancies',
    path: '/routes',
  },
]

const userMenu = [
  {
    title: 'Profile',
    icon: ICONS.USER,
    iconAlt: 'Profile',
    path: '/routesa',
  },
  {
    title: 'Settings',
    icon: ICONS.SETTINGS,
    iconAlt: 'Settings',
    path: '/routesg',
  },
  {
    title: 'Feedback',
    icon: ICONS.DIPLOMA,
    iconAlt: 'Feedback',
    path: '/routese',
  },
]

export const Sidebar = () => {
  return <SideBar children={[<Menu menu={menu} key={generateId()}/>, <Menu menu={userMenu} key={generateId()}/>]} spaceBetween='388px'/>;
};
