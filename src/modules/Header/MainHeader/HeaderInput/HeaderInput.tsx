import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { Input } from 'ui-kit/index';

import s from './HeaderInput.module.scss';
import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';

export const HeaderInput = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  return (
    <Input
      className={`${s[`input--${theme}`]}`}
      name='header-find'
      placeholder={t('header.search')}
      button={true}
      icon={<ICONS.SEARCH fill='#9D9FB5' />}
      theme={theme}
    />
  );
};
