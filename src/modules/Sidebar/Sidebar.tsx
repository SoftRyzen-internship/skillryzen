import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from 'context/themeContext';

import { useAppSelector } from 'hooks';
import { getUserRole } from 'redux/authSlice/authSelectors';

import { USER_ROLE } from 'constans/consts';
import { ROUTES } from 'routes/routes.const';
import { ICONS } from 'ui-kit/icons';

import { SideBar, Menu } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';

function generateId() {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
}

export const Sidebar = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const role = useAppSelector(getUserRole);

  const menu = useMemo(() => {
    if (role === USER_ROLE.candidate) {
      return [
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
    }

    return [
      {
        title: t('sidebar.dashboard'),
        icon: ICONS.CHART,
        iconAlt: 'dashboard',
        path: ROUTES.COMPANY_DASHBOARD,
      },
      {
        title: t('sidebar.certification'),
        icon: ICONS.DIPLOMA,
        iconAlt: 'Certification',
        path: ROUTES.COMPANY_CERTIFICATION,
      },
      {
        title: t('sidebar.students'),
        icon: ICONS.USER_GROUP,
        iconAlt: 'Students',
        path: ROUTES.STUDENTS,
      },
      {
        title: t('sidebar.invite'),
        icon: ICONS.TROPHY,
        iconAlt: 'Invite',
        path: ROUTES.INVITE_MODULE,
      },
    ];
  }, [role, t]);

  const userMenu = [
    {
      title: t('sidebar.feedback'),
      icon: ICONS.MESSAGE_CIRCLE,
      iconAlt: 'Feedback',
      path: ROUTES.FEEDBACK,
    },
    {
      title: t('sidebar.team'),
      icon: ICONS.USER_GROUP,
      iconAlt: 'Team',
      path: ROUTES.TEAM,
    },
  ];
  return (
    <SideBar
      children={[
        <Menu menu={menu} key={generateId()} theme={theme} />,
        <Menu menu={userMenu} key={generateId()} theme={theme} />,
      ]}
      spaceBetween='space-between'
      theme={theme}
      sticky={true}
      top='72px'
    />
  );
};
