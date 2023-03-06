import { Header } from 'modules/Header';
import { Sidebar } from 'modules/Sidebar';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'modules/common/types';

import s from './MainWrapper.module.scss';

const objectTheme = {
  dark: {
    wrapper: s.wrapperDark,
  },
  light: {
    wrapper: s.wrapperLight,
  },
};

interface Props {
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
}: Props) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <>
      {showHeader && <Header isTestingPage={isTestingPage} />}
      <div className={objectTheme[theme].wrapper}>
        {showSidebar && <Sidebar />}
        <div className={s.content}>{children}</div>
      </div>
    </>
  );
};
