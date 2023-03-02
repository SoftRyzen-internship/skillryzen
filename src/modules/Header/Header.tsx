import { MainHeader } from './MainHeader';
import { TestHeader } from './TestHeader';

interface IHeader {
  isTestingPage: boolean;
}

export const Header = ({ isTestingPage }: IHeader) => {
  return isTestingPage ? <TestHeader /> : <MainHeader />;
};
