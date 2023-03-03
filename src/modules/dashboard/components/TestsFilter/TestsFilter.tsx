import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';
import { MenuButton, Tabs } from 'ui-kit';
import { ICONS } from 'theme';

import s from './TestsFilter.module.scss';

interface ITestFilter {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

export const TestsFilter = ({ size, setSize }: ITestFilter) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className={s.testsFilter}>
      <Tabs
        theme={theme}
        tabs={[
          { title: t('testsMain.allTests'), path: '' },
          { title: t('testsMain.myTests'), path: 'fullstack_final' },
        ]}
      />
      <div className={s.testsFilter__wrapper}>
        <MenuButton
          theme={theme}
          onClick={() => setSize('small')}
          color={size === 'small' ? 'blue' : 'black'}
          icon='grid2'
        />
        <MenuButton
          theme={theme}
          onClick={() => setSize('large')}
          color={size === 'large' ? 'blue' : 'black'}
          icon='grid4'
        />
        <button
          className={`${s.testsFilter__filter} ${
            s[`testsFilter__filter--${theme}`]
          }`}
        >
          <ICONS.FILTER_TWO className={s.testsFilter__icon} />
          <span>{t('testsMain.filter')}</span>
        </button>
      </div>
    </div>
  );
};
