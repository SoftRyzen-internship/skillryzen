import React from 'react';
import { useTranslation } from 'react-i18next';
import { SideBar } from 'ui-kit/SideBar/SideBar';
import { Menu } from 'ui-kit/Menu/Menu';

import { ROUTES } from 'routes/routes.const';
import { ICONS } from 'theme';

function generateId() {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
}

export const Sidebar = () => {
  const { t } = useTranslation();

  const menu = [
    {
      title: t('sidebar.dashboard'),
      icon: ICONS.CHART,
      iconAlt: 'dashboard',
      path: ROUTES.DASHBOARD,
    },
    {
      title: t('sidebar.certification'),
      icon: ICONS.DIPLOMA,
      iconAlt: 'Certification',
      path: ROUTES.CERTIFICATION,
    },
    {
      title: t('sidebar.petprojects'),
      icon: ICONS.FILES,
      iconAlt: 'Petprojects',
      path: ROUTES.PETPROJECTS,
    },
    {
      title: t('sidebar.leaderboard'),
      icon: ICONS.TROPHY,
      iconAlt: 'Leaderboard',
      path: ROUTES.LEADERBOARD,
    },
    {
      title: t('sidebar.vacancies'),
      icon: ICONS.CASE_ROUND,
      iconAlt: 'Vacancies',
      path: ROUTES.VACANCIES,
    },
  ];

  const userMenu = [
    {
      title: t('sidebar.profile'),
      icon: ICONS.USER,
      iconAlt: 'Profile',
      path: ROUTES.PROFILE,
    },
    {
      title: t('sidebar.settings'),
      icon: ICONS.SETTINGS,
      iconAlt: 'Settings',
      path: ROUTES.SETTINGS,
    },
    {
      title: t('sidebar.feedback'),
      icon: ICONS.MESSAGE_CIRCLE,
      iconAlt: 'Feedback',
      path: ROUTES.FEEDBACK,
    },
  ];
  return (
    <SideBar
      children={[
        <Menu menu={menu} key={generateId()} />,
        <Menu menu={userMenu} key={generateId()} />,
      ]}
      spaceBetween='space-between'
    />
  );
};
