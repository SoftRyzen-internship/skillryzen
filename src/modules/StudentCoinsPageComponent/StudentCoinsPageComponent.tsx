import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import { Breadcrumbs, IconButton, Input, Tabs } from 'ui-kit/index';

import { CoinsCardList } from './CoinsCardList';

import s from './StudentCoinsPageComponent.module.scss';

const testsArray = [
  {
    id: 1,
    title: '+ 2 coins',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    number: 3,
  },
];

const tabs = [
  {
    id: 1,
    name: 'userCoins.newCoins',
    component: '',
  },
  {
    id: 2,
    name: 'userCoins.myCoins',
    component: '',
  },
];

export const StudentCoinsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [size, setSize] = useState<'large' | 'small'>('large');
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div className={`${s.coinsPage} ${s[`coinsPage--${theme}`]}`}>
      <Breadcrumbs />
      <div className={s.flexContainerTitle}>
        <h2 className={`${s.pageTitle} ${s[`pageTitle--${theme}`]}`}>
          {t('userCoins.pageTitle')}
        </h2>
        <Input
          name='search'
          placeholder={t('userCoins.search')}
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
      <CoinsCardList size={size} testsArray={testsArray} />
    </div>
  );
};
