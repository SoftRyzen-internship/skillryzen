import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';

import s from './TestInfoContainer.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const TestInfoContainer = ({ children }: IProps) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <div className={`${s.container} ${s[`container--${theme}`]}`}>
      {children}
    </div>
  );
};
