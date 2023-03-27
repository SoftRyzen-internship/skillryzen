import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { Input } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';

import s from './NotificationsSearch.module.scss';

export const NotificationsSearch = () => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  return (
    <div className={s.wrapper}>
      <h2 className={`${s.title} ${s[`title--${theme}`]}`}>
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
  );
};
