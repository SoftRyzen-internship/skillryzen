import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { Breadcrumbs, IconButton, Input, ScrollContainer, Tabs } from 'ui-kit';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { CoinsCardList } from './CoinsCardList';
import { ViewButtonList } from 'modules/common/ViewButtonList/ViewButtonList';

import s from './CoinsPageComponent.module.scss';


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

export const CoinsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [size, setSize] = useState<'large' | 'small'>('large');
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <ScrollContainer>
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
        <ViewButtonList size={size} setSize={setSize} />
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
    </ScrollContainer>
  );
};
