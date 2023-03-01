import React from 'react';

import { SideBar } from 'ui-kit/SideBar/SideBar';
import { Menu } from 'ui-kit/Menu/Menu';

import { ROUTES } from 'routes/routes.const';
import { ICONS } from 'theme';

import s from './Sidebar.module.scss';

function generateId() {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
}

const menu = [
  {
    title: 'Dashboard',
    icon: ICONS.DIPLOMA,
    iconAlt: 'dashboard',
    path: ROUTES.DASHBOARD,
  },
  {
    title: 'Certification',
    icon: ICONS.DIPLOMA,
    iconAlt: 'Certification',
    path: ROUTES.CERTIFICATION,
  },
  {
    title: 'Petprojects',
    icon: ICONS.FILES,
    iconAlt: 'Petprojects',
    path: ROUTES.PETPROJECTS,
  },
  {
    title: 'Leaderboard',
    icon: ICONS.TROPHY,
    iconAlt: 'Leaderboard',
    path: ROUTES.LEADERBOARD,
  },
  {
    title: 'Vacancies',
    icon: ICONS.CASE_ROUND,
    iconAlt: 'Vacancies',
    path: ROUTES.VACANCIES,
  },
];

const userMenu = [
  {
    title: 'Profile',
    icon: ICONS.USER,
    iconAlt: 'Profile',
    path: ROUTES.PROFILE,
  },
  {
    title: 'Settings',
    icon: ICONS.SETTINGS,
    iconAlt: 'Settings',
    path: ROUTES.SETTINGS,
  },
  {
    title: 'Feedback',
    icon: ICONS.MESSAGE_CIRCLE,
    iconAlt: 'Feedback',
    path: ROUTES.FEEDBACK,
    className: s.iconMessage,
  },
];

export const Sidebar = () => {
  return (
    <SideBar
      children={[
        <Menu menu={menu} key={generateId()} />,
        <Menu menu={userMenu} key={generateId()} />,
      ]}
      spaceBetween='388px'
    />
  );
};
