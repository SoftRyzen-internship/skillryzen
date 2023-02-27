import { NavLink } from 'react-router-dom';
import { AuthFormStep1 } from '@modules/details';
import s from './AuthForm.module.scss';

export const AuthForm = ({ currentStep }) => {
  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>Choose your role</h2>
      <p>
        Already have an account? <NavLink to='/login'>Log in</NavLink>
      </p>
      {currentStep === 1 && <AuthFormStep1 />}
    </div>
  );
};
