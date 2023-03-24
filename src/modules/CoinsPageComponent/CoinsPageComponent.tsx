import { useEffect, useState } from 'react';

import { CoinsFilter } from './CoinsFilter';
import { CoinsSearch } from './CoinsSearch';
import { CoinsCardList } from './CoinsCardList';

import { useCurrentWidth } from 'hooks';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { Breadcrumbs, ScrollContainer, Tabs } from 'ui-kit';

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

  const [currentTab, setCurrentTab] = useState<number>(
    () =>
      JSON.parse(sessionStorage.getItem('coinsPage'))?.currentTab ?? tabs[0].id
  );
  const [size, setSize] = useState<'large' | 'small'>(
    () => JSON.parse(sessionStorage.getItem('coinsPage'))?.size ?? 'large'
  );

  const currentWidth = useCurrentWidth();

  useEffect(() => {
    sessionStorage.setItem('coinsPage', JSON.stringify({ currentTab, size }));
  }, [currentTab, size]);

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <ScrollContainer>
      <div className={s.coinsPage}>
        <Breadcrumbs />
        <div className={s.coinsPage__wrapper}>
          <CoinsSearch />
          <div className={s.coinsPage__filterWrapper}>
            <Tabs
              currentTab={currentTab}
              tabs={tabs}
              changeTab={handleChangeTab}
              theme={theme}
            />
            <CoinsFilter size={size} setSize={setSize} />
          </div>
        </div>
        <CoinsCardList
          size={currentWidth < 768 ? 'small' : size}
          testsArray={testsArray}
        />
      </div>
    </ScrollContainer>
  );
};
