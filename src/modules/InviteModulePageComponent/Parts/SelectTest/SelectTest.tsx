import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { Select } from 'ui-kit';

import s from './SelectTest.module.scss';

export const SelectTest = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <h3 className={s.title}>{t('invite.choose.test')}</h3>
      <Select />
    </div>
  );
};
