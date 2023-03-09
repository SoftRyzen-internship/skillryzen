import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import { IconButton, Input, Tabs } from 'ui-kit/index';

import { Breadcrumbs } from './Breadcrumbs';
import { NotificationCardList } from './NotificationCardList';

import s from './StudentNotificationsPageComponent.module.scss';
const testsArray = [
  {
    id: 1,
    title: 'You were added to company',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    number: 3,
  },
];

export const StudentNotificationsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [size, setSize] = useState<'large' | 'small'>('large');

  return (
    <div className={`${s.notificationsPage} ${s[`testsPage--${theme}`]}`}>
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
          theme={theme}
          tabs={[
            {
              title: t('userNotifications.newNotifications'),
              path: ROUTES.NOTIFICATIONS_NEW,
            },
            {
              title: t('userNotifications.allNotifications'),
              path: ROUTES.NOTIFICATIONS_ALL,
            },
          ]}
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
      <NotificationCardList size={size} testsArray={testsArray} />
    </div>
  );
};
