import { useAppSelector } from 'hooks/hook';
import { AuthIntro } from 'modules/dashboard';
import { HeaderButtonLanguage } from 'modules/Header/MainHeader/HeaderButtonList/HeaderButtonLanguage';
import { HeaderButtonTheme } from 'modules/Header/MainHeader/HeaderButtonList/HeaderButtonTheme';

import s from './AuthWrapper.module.scss';

export interface AuthProps {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: AuthProps) => {
  const step = useAppSelector((state) => state.auth.step);

  return (
    <main className={s.container}>
      <div className={s.settingsWrapper}>
        <HeaderButtonLanguage />
        <HeaderButtonTheme />
      </div>
      {step < 3 && <AuthIntro />}
      {children}
    </main>
  );
};
