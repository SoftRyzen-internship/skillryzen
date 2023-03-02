import { useState } from 'react';

import { TestsSearch } from '../TestsSearch/TestsSearch';
import { TestsFilter } from '../TestsFilter/TestsFilter';
import { CardsList } from 'modules/common/components/CardsList/CardsList';

import s from './TestsMain.module.scss';

const testsArray = [
  {
    title: 'FullStuck_Final_Test',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    number: 50,
    time: 3,
  },
  {
    title: 'FullStuck_Final_Test',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    number: 50,
    time: 3,
  },
  {
    title: 'FullStuck_Final_Test',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    number: 50,
    time: 3,
  },
  {
    title: 'FullStuck_Final_Test',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    number: 50,
    time: 3,
  },
];

export const TestsMain = () => {
  const [size, setSize] = useState<'large' | 'small'>('large');

  return (
    <div className={s.testsPage}>
      <TestsSearch />
      <TestsFilter setSize={setSize} size={size} />
      <CardsList type='info' size={size} testsArray={testsArray} />
    </div>
  );
};
