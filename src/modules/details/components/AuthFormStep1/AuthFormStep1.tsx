import s from './AuthFormStep1.module.scss';
import { User, Users } from '../../../../theme/icons.const';
import { AuthButton, Input } from '../../../../ui-kit/index';

export const AuthFormStep1 = () => {
  const handleClick = () => {};

  return (
    <form action=''>
      <fieldset>
        <legend>Please choose your role</legend>
        <ul className={s.roleList}>
          <li>
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
          </li>
          <li>
            <input type='radio' name='role' id='company' value='company' />
            <label htmlFor='company' className={s.roleBtn}>
              <Users />
              Company
            </label>
          </li>
        </ul>
      </fieldset>
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
              type='submit'
              color='blue'
            />
          </li>
        </ul>
      </div>
    </form>
  );
};
