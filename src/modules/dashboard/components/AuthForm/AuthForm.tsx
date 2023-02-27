import { NavLink } from 'react-router-dom';
import { AuthFormStep1 } from '../../../details';
import { AuthFormStep3 } from '../../../details';
import s from './AuthForm.module.scss';

interface IProps {
  currentStep: number;
}

export const AuthForm = ({ currentStep }: IProps) => {
  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>Choose your role</h2>
      <p>
        Already have an account? <NavLink to='/login'>Log in</NavLink>
      </p>
      {currentStep === 1 && <AuthFormStep1 />}
      {currentStep === 3 && <AuthFormStep3 />}
    </div>
  );
};
