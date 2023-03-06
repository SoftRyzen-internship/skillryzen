import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';
import { MenuButton, Tabs } from 'ui-kit/index';

import s from './TestsFilter.module.scss';

interface TestFilterProps {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

export const TestsFilter = ({ size, setSize }: TestFilterProps) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className={s.testsFilter}>
      <Tabs
        theme={theme}
        tabs={[
          { title: t('testsMain.allTests'), path: '' },
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
