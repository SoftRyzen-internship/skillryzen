import s from './MainWrapper.module.scss';
import { Header } from 'modules/Header';
import { Sidebar } from 'modules/Sidebar';

interface IProps {
  showSidebar: boolean;
  showHeader: boolean;
  isTestingPage: boolean;
  children: React.ReactNode;
}

export const MainWrapper = ({
  showSidebar,
  showHeader,
  isTestingPage,
  children,
}: IProps) => {
  return (
    <>
      {showHeader && <Header isTestingPage={isTestingPage} />}
      <div className={s.container}>
        {showSidebar && <Sidebar />}
        <div className={s.content}>{children}</div>
      </div>
    </>
  );
};
