import { memo } from 'react';
import { MainHeader } from './MainHeader';
import { TestHeader } from './TestHeader';

interface IHeader {
  isTestingPage: boolean;
}

export const Header = memo(({ isTestingPage }: IHeader) => {
  return isTestingPage ? <TestHeader /> : <MainHeader />;
});

Header.displayName = 'Header';
