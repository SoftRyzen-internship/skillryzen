import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './ScrollContainer.module.scss';

interface Props {
  children: React.ReactNode;
}

export const ScrollContainer = ({ children }: Props) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>{children}</div>
  );
};
