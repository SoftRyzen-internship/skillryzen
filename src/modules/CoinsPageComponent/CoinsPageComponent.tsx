import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';
import { useCurrentWidth, useSessionStorage } from 'hooks';

import { CoinsFilter } from './CoinsFilter';
import { CoinsSearch } from './CoinsSearch';
import { CoinsCardList } from './CoinsCardList';

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

  const [currentValue, setCurrentValue] = useSessionStorage('coinsPage', {
    currentTab: tabs[0].id,
    size: 'large',
  });

  const handleChangeTab = (tab: number) => {
    setCurrentValue({ ...currentValue, currentTab: tab });
  };

  const handleChangeSize = (size: 'large' | 'small') => {
    setCurrentValue({ ...currentValue, size });
  };

  const currentWidth = useCurrentWidth();

  const { currentTab, size } = currentValue;

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
            <CoinsFilter size={size} setSize={handleChangeSize} />
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
