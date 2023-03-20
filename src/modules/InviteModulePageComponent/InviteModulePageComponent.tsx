import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { InviteAdminBlock } from './InviteAdminBlock';
import { InviteStudentBlock } from './InviteStudentBlock';

import { Breadcrumbs, Tabs } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './InviteModulePageComponent.module.scss';

const tabs = [
  {
    id: 1,
    name: 'invite.student.tab',
    component: <InviteStudentBlock key='invite.student.tab' />,
  },
  {
    id: 2,
    name: 'invite.admin.tab',
    component: <InviteAdminBlock key='invite.admin.tab' />,
  },
];

export const InviteModulePageComponent = () => {
  const [currentTab, setCurrentTab] = useState(() => {
    let savedTab = sessionStorage.getItem('invitePageTab');
    return savedTab ? Number(savedTab) : tabs[0].id;
  });

  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const handleChangeTab = (tab: number) => {
    sessionStorage.setItem('invitePageTab', String(tab));
    setCurrentTab(tab);
  };

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <Breadcrumbs />
      <h2 className={`${s.title} ${s[`title--${theme}`]}`}>
        {t('invite.title')}
      </h2>
      <Tabs
        tabs={tabs}
        currentTab={currentTab}
        changeTab={handleChangeTab}
        theme={theme}
      />
      {tabs.map(el => {
        if (el.id !== currentTab) return null;
        return el.component;
      })}
    </div>
  );
};
