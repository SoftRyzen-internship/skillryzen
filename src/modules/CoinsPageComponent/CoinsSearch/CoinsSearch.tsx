import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { Input } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';

import s from './CoinsSearch.module.scss';

export const CoinsSearch = () => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  return (
    <div className={s.wrapper}>
      <h2 className={`${s.title} ${s[`title--${theme}`]}`}>
        {t('userCoins.pageTitle')}
      </h2>
      <Input
        name='search'
        placeholder={t('userCoins.search')}
        button={true}
        icon={<ICONS.SEARCH className={s.inputIcon} />}
        theme={theme}
        labelClassName={s.input}
      />
    </div>
  );
};
