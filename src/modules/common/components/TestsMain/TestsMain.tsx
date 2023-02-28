import { Input } from '../../../../ui-kit/Input/Input';
import { Tabs } from '../../../../ui-kit/Tabs/Tabs';
import { Card } from '../../../../ui-kit/Card/Card';
import { Breadcrumbs } from '../../../../ui-kit/Breadcrumbs/Breadcrumbs';

import s from './TestsMain.module.scss'

export const TestsMain = () => {
  return (
    <div className={s.testsPage}>
     
      <div className={s.testsPage__header}>
          <h2 className={s.testsPage__title}>Tests</h2>
          <div className={s.testsPage__inputWrapper}>
            <Input name='search' placeholder='Search..' />
            <button>Practice</button>
          </div>
      </div>
      <Tabs
        tabs={[
          { title: 'All tests', path: '/tests' },
          { title: 'My tests', path: '/route' },
        ]}
      />
      <div style={{padding: '18px 20px 18px 25px', color: 'white', backgroundColor: '#121533'}}>Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.</div>
      <div style={{padding: '18px 20px 18px 25px', color: 'white', backgroundColor: '#121533'}}>Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.</div>
      <div style={{padding: '18px 20px 18px 25px', color: 'white', backgroundColor: '#121533'}}>Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.</div>
      <div style={{padding: '18px 20px 18px 25px', color: 'white', backgroundColor: '#121533'}}>Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.</div>
      {/* <Card
        item={{
          title: 'FullStuck_Final_Test',
          text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
          fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
          number: 50,
          time: 2,
        }}
      /> */}
    </div>
  );
};
