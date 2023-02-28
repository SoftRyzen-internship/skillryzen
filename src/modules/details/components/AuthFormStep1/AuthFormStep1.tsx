import React, { useState } from 'react';

import { ICONS } from 'theme';
import { AuthButton, Input } from 'ui-kit';

import s from './AuthFormStep1.module.scss';

export const AuthFormStep1 = () => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [role, setRole] = useState('candidate');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCode('');
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);

    if (e.target.value.length === 5) {
      setIsValid(true);
      return;
    }

    setIsValid(false);
  };

  return (
    <form action='' className={s.form} onSubmit={handleSubmit}>
      <fieldset>
        <legend className={s.formTitle}>Please choose your role</legend>
        <ul className={s.roleList}>
          <li>
            <input
              type='radio'
              name='role'
              id='candidate'
              value='candidate'
              checked={role === 'candidate'}
              onChange={handleRoleChange}
            />
            <label htmlFor='candidate' className={s.roleBtn}>
              <ICONS.USER className={s.icon} />
              Candidate
            </label>
          </li>
          <li>
            <input
              type='radio'
              name='role'
              id='company'
              value='company'
              checked={role === 'company'}
              onChange={handleRoleChange}
            />
            <label htmlFor='company' className={s.roleBtn}>
              <ICONS.USERS className={s.icon} />
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
                className={s.company}
                size='large'
                text='GoIT'
                type='button'
                needBackground='noBackgroundAccent'
              />
            </li>
          )}
          <li>
            <AuthButton
              size='large'
              text='Create account'
              type='submit'
              color='blue'
              disabled={!isValid}
            />
          </li>
        </ul>
      </div>
    </form>
  );
};
