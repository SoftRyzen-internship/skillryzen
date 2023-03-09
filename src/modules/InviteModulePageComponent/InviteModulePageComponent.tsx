import { useState } from 'react';

import { InvaiteAdminBlock } from './InvaiteAdminBlock';
import { InvaiteStudentBlock } from './InvaiteStudentBlock';

import { Breadcrumbs, Tabs } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './InviteModulePageComponent.module.scss';

const tabs = ['Запрошення студента', 'Запрошення адміна'];

export const InviteModulePageComponent = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const { theme }: IThemeContext = useThemeContext();

  const handleChangeTab = (tab: string) => setCurrentTab(tab);

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <Breadcrumbs />
      <h2 className={`${s.title} ${s[`title--${theme}`]}`}>Invite module</h2>
      <Tabs
        tabs={tabs}
        currentTab={currentTab}
        changeTab={handleChangeTab}
        theme={theme}
      />
      {currentTab === 'Запрошення студента' ? (
        <InvaiteStudentBlock />
      ) : (
        <InvaiteAdminBlock />
      )}
    </div>
  );
};
