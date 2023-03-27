import { useEffect, useState } from 'react';

import { useCurrentWidth } from 'hooks';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { Breadcrumbs, ScrollContainer, Tabs } from 'ui-kit';

import { NotificationsFilter } from './NotificationsFilter';
import { NotificationsSearch } from './NotificationsSearch';
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

  const [currentTab, setCurrentTab] = useState<number>(
    () =>
      JSON.parse(sessionStorage.getItem('notificationsPage'))?.currentTab ??
      tabs[0].id
  );
  const [size, setSize] = useState<'large' | 'small'>(
    () =>
      JSON.parse(sessionStorage.getItem('notificationsPage'))?.size ?? 'large'
  );

  const currentWidth = useCurrentWidth();

  useEffect(() => {
    sessionStorage.setItem(
      'notificationsPage',
      JSON.stringify({ currentTab, size })
    );
  }, [currentTab, size]);

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <ScrollContainer>
      <div className={s.notificationsPage}>
        <Breadcrumbs />
        <div className={s.notificationsPage__wrapper}>
          <NotificationsSearch />
          <div className={s.notificationsPage__filterWrapper}>
            <Tabs
              currentTab={currentTab}
              tabs={tabs}
              changeTab={handleChangeTab}
              theme={theme}
            />
            <NotificationsFilter size={size} setSize={setSize} />
          </div>
        </div>
        <NotificationsCardList
          size={currentWidth < 768 ? 'small' : size}
          testsArray={testsArray}
        />
      </div>
    </ScrollContainer>
  );
};
