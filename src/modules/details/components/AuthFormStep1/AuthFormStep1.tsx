import s from './AuthFormStep1.module.scss';
import { User, Users } from 'theme/icons.const';
import { AuthButton, Input } from 'ui-kit';
import { useState } from 'react';

export const AuthFormStep1 = () => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const handleClick = () => {};

  const handleSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);

    if (e.target.value.length === 5) {
      setIsValid(true);
      return;
    }

    setIsValid(false);
  };

  return (
    <form action='' className={s.form}>
      <fieldset>
        <legend className={s.formTitle}>Please choose your role</legend>
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
      <div className={`${s.inputWrapper} ${isValid ? s.valid : null}`}>
        <Input
          onChange={handleChange}
          className={s.codeInput}
          name='code'
          placeholder='Введіть код компанії'
          value={code}
        />
      </div>
      <div className={s.buttonsWrapper}>
        <ul className={s.buttonsList}>
          {isValid && (
            <li>
              <p className={s.buttonsTitle}>Your company is</p>
              <AuthButton
                onClick={handleClick}
                size='large'
                text='GoIT'
                type='button'
                color='white'
              />
            </li>
          )}
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
