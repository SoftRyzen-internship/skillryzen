import { AuthIntro } from 'modules/dashboard';

import s from './AuthWrapper.module.scss';

interface Children {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: Children) => {
  return (
    <main className={s.container}>
      <AuthIntro />
      {children}
    </main>
  );
};
