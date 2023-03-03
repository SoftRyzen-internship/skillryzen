import { NavLink } from 'react-router-dom';

import { RegisterAuthForm } from 'modules/forms';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const SecondStep = () => (
  <div className={s.formWrapper}>
    <h2 className={s.formTitle}>Get started for free</h2>
    <p className={s.logIn}>
      Already have an account?{' '}
      <NavLink to='/login' className={s.link}>
        Log in
      </NavLink>
    </p>
    <RegisterAuthForm />
  </div>
);
