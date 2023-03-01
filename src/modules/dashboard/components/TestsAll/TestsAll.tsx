import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'theme';

import { Input } from 'ui-kit/Input/Input';
import { Tabs } from 'ui-kit/Tabs/Tabs';
import { Card } from 'ui-kit/Card/Card';
import { Breadcrumbs } from 'ui-kit/Breadcrumbs';

import s from './TestsAll.module.scss';

export const TestsAll = () => {
  const { t } = useTranslation();

  return (
    <div className={s.testsPage}>
      <div className={s.testsPage__headerContainer}>
        <Breadcrumbs />
        <div className={s.testsPage__header}>
          <h2 className={s.testsPage__title}>Tests</h2>
          <div className={s.testsPage__inputWrapper}>
            <Input
              name='search'
              placeholder={t('testsMain.search')}
              button={true}
              icon={<ICONS.SEARCH fill='#9D9FB5' />}
            />
            <button className={s.testsPage__button}>
              <ICONS.BOOK className={s.testsPage__iconBook} />
              {t('testsMain.practice')}
            </button>
          </div>
        </div>
      </div>

      <div className={s.testsPage__filters}>
        <Tabs
          tabs={[
            { title: t('testsMain.allTests'), path: '/tests' },
            { title: t('testsMain.myTests'), path: '/route' },
          ]}
        />
        <div className={s.testsPage__btnContainer}>
          <button className={s.testsPage__btn}>
            <ICONS.GRID className={s.testsPage__grid} />
          </button>
          <button className={s.testsPage__btnActive}>
            <ICONS.GRID_GORIZONTAL className={s.testsPage__gridHorizontal} />
          </button>
          <button className={s.testsPage__btn}>
            <ICONS.FILTER_TWO className={s.testsPage__funnel} />
            {t('testsMain.filter')}
          </button>
        </div>
      </div>
      <div className={s.testsPage__testList}>
        <Link to='fullstack_final'>
          <Card
            item={{
              title: 'FullStack_Final Test',
              text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
              fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
              number: t('testsMain.numberOfQuestions'),
              time: 2,
            }}
          />
        </Link>
      </div>
    </div>
  );
};
