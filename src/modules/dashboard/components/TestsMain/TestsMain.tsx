import { Input } from 'ui-kit/Input/Input';
import { Tabs } from 'ui-kit/Tabs/Tabs';
// import { Card } from '../../../../ui-kit/Card/Card';
// import { Breadcrumbs } from '../../../../ui-kit/Breadcrumbs/Breadcrumbs';

import s from './TestsMain.module.scss'
import { Card } from './../../../../ui-kit/Card/Card';
import { ICONS } from 'theme';

export const TestsMain = () => {
  return (
    <div className={s.testsPage}>
      <div className={s.testsPage__header}>
        <h2 className={s.testsPage__title}>Tests</h2>
        <div className={s.testsPage__inputWrapper}>
          <Input name='search' placeholder='Search..' button={true} icon={<ICONS.SEARCH fill='#9D9FB5' />} />
          <button className={s.testsPage__button}><ICONS.BOOK className={s.testsPage__iconBook} /> Practice</button>
        </div>
      </div>
      <div className={s.testsPage__filters}>
        <Tabs
          tabs={[
            { title: 'All tests', path: '/tests' },
            { title: 'My tests', path: '/route' },
          ]}
        />
      </div>
      <div className={s.testsPage__testList}>
        <Card
          item={{
            title: 'FullStack_Final Test',
            text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
            fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
            number: '50 запитань',
            time: 2,
          }}
        />
        <Card
          item={{
            title: 'HTML CSS Final Test',
            text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
            fields: ['HTML', 'CSS'],
            number: '50 запитань',
            time: 1,
          }}
        />
      </div>
    </div>
  );
};
