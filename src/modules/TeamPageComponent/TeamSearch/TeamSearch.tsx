import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { Input, Breadcrumbs } from 'ui-kit/index';

import s from './TestsSearch.module.scss';

export const TestsSearch = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className={s.teamSearch}>
      <Breadcrumbs />
      <div className={s.teamSearch__wrapper}>
        <h2
          className={`${s.teamSearch__title} ${
            s[`testsSearch__title--${theme}`]
          }`}
        >
          Our team
        </h2>
        <Input
          name='search'
          placeholder={t('testsMain.search')}
          button={true}
          icon={<ICONS.SEARCH fill='#9D9FB5' />}
          theme={theme}
        />
      </div>
    </div>
  );
};