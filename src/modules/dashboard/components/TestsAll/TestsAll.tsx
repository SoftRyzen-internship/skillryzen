import { Input } from 'ui-kit/Input/Input';
import { Tabs } from 'ui-kit/Tabs/Tabs';
// import { Card } from 'ui-kit/Card/Card';
// import { Breadcrumbs } from 'ui-kit/Breadcrumbs/Breadcrumbs';

import s from './TestsAll.module.scss';
import { Card } from 'ui-kit/Card/Card';
import { ICONS } from 'theme';
import { Breadcrumbs } from 'ui-kit/Breadcrumbs';
import { Link } from 'react-router-dom';

export const TestsAll = () => {
  return (
    <div className={s.testsPage}>
      <div className={s.testsPage__headerContainer}>
        <Breadcrumbs />
        <div className={s.testsPage__header}>
          <h2 className={s.testsPage__title}>Tests</h2>
          <div className={s.testsPage__inputWrapper}>
            <Input
              name='search'
              placeholder='Search..'
              button={true}
              icon={<ICONS.SEARCH fill='#9D9FB5' />}
            />
            <button className={s.testsPage__button}>
              <ICONS.BOOK className={s.testsPage__iconBook} /> Practice
            </button>
          </div>
        </div>
      </div>

      <div className={s.testsPage__filters}>
        <Tabs
          tabs={[
            { title: 'All tests', path: '/tests' },
            { title: 'My tests', path: '/route' },
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
            Filter
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
              number: '50 запитань',
              time: 2,
            }}
          />
        </Link>
      </div>
    </div>
  );
};
