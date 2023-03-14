import { useAppSelector } from 'hooks/hook';
import { getStep } from 'redux/authSlice/authSelectors';

import { AuthIntro } from '../AuthIntro/AuthIntro';
import { HeaderButtonLanguage } from 'modules/Header/MainHeader/HeaderButtonList/HeaderButtonLanguage';
import { HeaderButtonTheme } from 'modules/Header/MainHeader/HeaderButtonList/HeaderButtonTheme';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import s from './AuthWrapper.module.scss';

const objectTheme = {
  dark: {
    authWrapper: s.authWrapperDark,
  },
  light: {
    authWrapper: s.authWrapperLight,
  },
};

export interface AuthProps {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: AuthProps) => {
  const { theme }: IThemeContext = useThemeContext();
  const step = useAppSelector(getStep);

  return (
    <main className={objectTheme[theme].authWrapper}>
      <div className={s.settingsWrapper}>
        <HeaderButtonTheme />
        <HeaderButtonLanguage />
      </div>
      {step < 3 && <AuthIntro />}
      {children}
    </main>
  );
};
