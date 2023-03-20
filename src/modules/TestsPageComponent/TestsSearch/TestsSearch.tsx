import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { ICONS } from 'ui-kit/icons';
import { Input } from 'ui-kit/index';

import s from './TestsSearch.module.scss';

export const TestsSearch = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className={s.testsSearch__wrapper}>
      <h2
        className={`${s.testsSearch__title} ${
          s[`testsSearch__title--${theme}`]
        }`}
      >
        {t('testsMain.title')}
      </h2>
      <Input
        name='search'
        placeholder={t('testsMain.search')}
        button={true}
        icon={<ICONS.SEARCH fill='#9D9FB5' />}
        theme={theme}
      />
    </div>
  );
};

{
  /* <div className={s.testsSearch__inputWrapper}> 
<button
            className={`${s.testsSearch__button} ${
              s[`testsSearch__button--${theme}`]
            }`}
          >
            <ICONS.BOOK className={s.testsSearch__iconBook} />
            {t('testsMain.practice')}
 </div> */
}
