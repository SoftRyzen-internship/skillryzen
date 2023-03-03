import { useAppSelector } from 'hooks/hook';
import { AuthIntro } from 'modules/dashboard';

import s from './AuthWrapper.module.scss';

interface Children {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: Children) => {
  const step = useAppSelector((state) => state.auth.step);

  return (
    <main className={s.container}>
      {step < 3 && <AuthIntro />}
      {children}
    </main>
  );
};
