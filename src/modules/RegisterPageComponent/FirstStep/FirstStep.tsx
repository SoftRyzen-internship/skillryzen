import { NavLink } from 'react-router-dom';

import { RegisterRoleForm } from 'modules/Forms/RegisterRoleForm/RegisterRoleFrom';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const FirstStep = () => (
  <div className={s.formWrapper}>
    <h2 className={s.formTitle}>Choose your role</h2>
    <p className={s.logIn}>
      Already have an account?{' '}
      <NavLink to='/login' className={s.link}>
        Log in
      </NavLink>
    </p>
    <RegisterRoleForm />
  </div>
);
