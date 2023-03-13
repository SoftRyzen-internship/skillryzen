import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import { Breadcrumbs, IconButton, Input, Tabs } from 'ui-kit/index';

import { NotificationsCardList } from './NotificationsCardList';

import s from './NotificationsPageComponent.module.scss';

const testsArray = [
  {
    id: 1,
    title: 'You were added to company',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    number: 3,
  },
];

const tabs = [
  {
    id: 1,
    name: 'userNotifications.newNotifications',
    component: '',
  },
  {
    id: 2,
    name: 'userNotifications.allNotifications',
    component: '',
  },
];

export const NotificationsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [size, setSize] = useState<'large' | 'small'>('large');
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div
      className={`${s.notificationsPage} ${s[`notificationsPage--${theme}`]}`}
    >
      <Breadcrumbs />
      <div className={s.flexContainerTitle}>
        <h2 className={`${s.pageTitle} ${s[`pageTitle--${theme}`]}`}>
          {t('userNotifications.pageTitle')}
        </h2>
        <Input
          name='search'
          placeholder={t('userNotifications.search')}
          button={true}
          icon={<ICONS.SEARCH className={s.inputIcon} />}
          theme={theme}
        />
      </div>
      <div className={s.flexContainerTabs}>
        <Tabs
          currentTab={currentTab}
          tabs={tabs}
          changeTab={handleChangeTab}
          theme={theme}
        />

        <div className={s.buttonsContainer}>
          <IconButton
            className={s.itemButton}
            theme={theme}
            onClick={() => setSize('small')}
            color={size === 'small' ? 'blue' : 'black'}
            icon='grid2'
          />
          <IconButton
            className={s.itemButton}
            theme={theme}
            onClick={() => setSize('large')}
            color={size === 'large' ? 'blue' : 'black'}
            icon='grid4'
          />
          <button
            className={`${s.itemButton} ${s.filterButton} ${
              s[`filterButton--${theme}`]
            }`}
          >
            <ICONS.FILTER_TWO className={s.filterIcon} />
            <span>{t('testsMain.filter')}</span>
          </button>
        </div>
      </div>
      <NotificationsCardList size={size} testsArray={testsArray} />
    </div>
  );
};
