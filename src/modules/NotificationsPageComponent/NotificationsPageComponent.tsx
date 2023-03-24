import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { useCurrentWidth, useOutsideClick } from 'hooks';
import { filterData } from './filterData';

import {
  Accordion,
  Breadcrumbs,
  Filter,
  Input,
  ScrollContainer,
  Tabs,
} from 'ui-kit';
import { ViewButtonList } from 'modules/common/ViewButtonList/ViewButtonList';
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

  const [currentTab, setCurrentTab] = useState<number>(
    () =>
      JSON.parse(sessionStorage.getItem('notificationsPage'))?.currentTab ??
      tabs[0].id
  );
  const [size, setSize] = useState<'large' | 'small'>(
    () =>
      JSON.parse(sessionStorage.getItem('notificationsPage'))?.size ?? 'large'
  );
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const filterRef = useRef<HTMLDivElement>(null);
  const currentWidth = useCurrentWidth();

  useOutsideClick(filterRef, setShowFilter);

  useEffect(() => {
    sessionStorage.setItem(
      'notificationsPage',
      JSON.stringify({ currentTab, size })
    );
  }, [currentTab, size]);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <ScrollContainer>
      <div className={s.notificationsPage}>
        <Breadcrumbs />
        <div className={s.notificationsPage__wrapper}>
          <div className={s.notificationsPage__searchWrapper}>
            <h2 className={`${s[`notificationsPage__title--${theme}`]}`}>
              {t('userNotifications.pageTitle')}
            </h2>
            <Input
              name='search'
              placeholder={t('userNotifications.search')}
              button={true}
              icon={<ICONS.SEARCH className={s.inputIcon} />}
              theme={theme}
              labelClassName={s.input}
            />
          </div>
          <div className={s.notificationsPage__filterWrapper}>
            <Tabs
              currentTab={currentTab}
              tabs={tabs}
              changeTab={handleChangeTab}
              theme={theme}
            />
            <div className={s.notificationsPage__buttonsContainer}>
              <ViewButtonList size={size} setSize={setSize} />
              <Filter
                ref={filterRef}
                handleFilter={handleFilter}
                showFilter={showFilter}
                theme={theme}
              >
                {showFilter && (
                  <Accordion data={filterData} isIcon isList isMargin />
                )}
              </Filter>
            </div>
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
