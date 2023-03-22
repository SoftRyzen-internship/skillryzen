import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { InviteAdminBlock } from './InviteAdminBlock';
import { InviteStudentBlock } from './InviteStudentBlock';

import { Breadcrumbs, ScrollContainer, Tabs } from 'ui-kit';

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
    const savedTab = sessionStorage.getItem('invitePageTab');
    return savedTab ? Number(savedTab) : tabs[0].id;
  });

  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const handleChangeTab = (tab: number) => {
    sessionStorage.setItem('invitePageTab', String(tab));
    setCurrentTab(tab);
  };

  return (
    <ScrollContainer>
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
    </ScrollContainer>
  );
};
