import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { useState } from 'react';

import { TestsSearch } from './TestsSearch/TestsSearch';
import { TestsFilter } from './TestsFilter/TestsFilter';
import { TestsCardsList } from './TestsCardsList/TestsCardsList';

import s from './TestsPageComponent.module.scss';

export const TestsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const [size, setSize] = useState<'large' | 'small'>('large');

  return (
    <div className={`${s.testsPage} ${s[`testsPage--${theme}`]}`}>
      <TestsSearch />
      <TestsFilter setSize={setSize} size={size} />
      <TestsCardsList size={size} />
    </div>
  );
};
