import { NavLink } from 'react-router-dom';
import { LoginForm } from 'modules/Forms';

import s from './Login.module.scss';

export const Login = () => {
  // const dispatch = useAppDispatch();
  return (
    <section className={s.section}>
      <h2 className={s.formTitle}>Welcome back</h2>
      <p className={s.logIn}>
        Don’t have an account?{' '}
        <NavLink to='/register' className={s.link}>
          Start for free
        </NavLink>
      </p>
      <LoginForm />
    </section>
  );
};