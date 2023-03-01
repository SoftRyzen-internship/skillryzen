import { useTranslation } from 'react-i18next';

import { MenuButton, Tabs } from 'ui-kit';
import { ICONS } from 'theme';

import s from './TestsFilter.module.scss';

interface ITestFilter {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

export const TestsFilter = ({ size, setSize }: ITestFilter) => {
  const { t } = useTranslation();

  return (
    <div className={s.testsFilter}>
      <Tabs
        tabs={[
          { title: t('testsMain.allTests'), path: '' },
          { title: t('testsMain.myTests'), path: 'fullstack_final' },
        ]}
      />
      <div className={s.testsFilter__wrapper}>
        <MenuButton
          onClick={() => setSize('small')}
          color={size === 'small' ? 'blue' : 'black'}
          icon='grid2'
        />
        <MenuButton
          onClick={() => setSize('large')}
          color={size === 'large' ? 'blue' : 'black'}
          icon='grid4'
        />
        <button className={s.testsFilter__filter}>
          <ICONS.FILTER_TWO className={s.testsFilter__icon} />
          {t('testsMain.filter')}
        </button>
      </div>
    </div>
  );
};
