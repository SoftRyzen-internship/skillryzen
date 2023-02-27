import { User, Users } from '@theme/icons.const';
import { AuthButton, Input } from '@ui-kit/index';
import { NavLink } from 'react-router-dom';
import s from './AuthForm.module.scss';

export const AuthForm = () => {
  const handleClick = () => {};

  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>Choose your role</h2>
      <p>
        Already have an account? <NavLink to='/login'>Log in</NavLink>
      </p>
      <p>Please choose your role</p>
      <div className={s.roleList}>
        <input
          type='radio'
          name='role'
          id='candidate'
          value='candidate'
          checked
        />
        <label htmlFor='candidate' className={s.roleBtn}>
          <User />
          Candidate
        </label>

        <input type='radio' name='role' id='company' value='company' />
        <label htmlFor='company' className={s.roleBtn}>
          <Users />
          Company
        </label>
      </div>
      <Input
        className={s.codeInput}
        name='code'
        placeholder='Введіть код компанії'
      />
      <div className={s.buttonsWrapper}>
        <p className={s.buttonsTitle}>Your company is</p>
        <ul className={s.buttonsList}>
          <li>
            <AuthButton
              onClick={handleClick}
              size='large'
              text='GoIT'
              type='button'
              color='white'
            />
          </li>
          <li>
            <AuthButton
              onClick={handleClick}
              size='large'
              text='Create account'
              type='button'
              color='blue'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
