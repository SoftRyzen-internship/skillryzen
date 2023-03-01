import { useTranslation } from 'react-i18next';

import { ICONS } from 'theme';
import { Input } from 'ui-kit';
import { Breadcrumbs } from 'ui-kit';

import s from './TestsSearch.module.scss';

export const TestSearch = () => {
  const { t } = useTranslation();

  return (
    <div className={s.testsSearch}>
      <Breadcrumbs />
      <div className={s.testsSearch__wrapper}>
        <h2 className={s.testsSearch__title}>Tests</h2>
        <div className={s.testsSearch__inputWrapper}>
          <Input
            name='search'
            placeholder={t('testsMain.search')}
            button={true}
            icon={<ICONS.SEARCH fill='#9D9FB5' />}
          />
          <button className={s.testsSearch__button}>
            <ICONS.BOOK className={s.testsSearch__iconBook} />
            {t('testsMain.practice')}
          </button>
        </div>
      </div>
    </div>
  );
};
