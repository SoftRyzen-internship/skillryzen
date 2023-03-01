import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ICONS } from 'theme';
import { AuthButton } from 'ui-kit';

import React from 'react';

import s from './AuthFormStep1.module.scss';
import s2 from '../AuthSteps/AuthSteps.module.scss';

interface IProps {
  setStep: any;
}

export const AuthFormStep1 = ({ setStep }: IProps) => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [role, setRole] = useState('candidate');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(2);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);

    if (e.target.value.length === 5) {
      setIsValid(true);
    }

    if (e.target.value.length !== 5 && e.target.value.length > 0) {
      setIsValid(false);
    }
  };

  return (
    <div className={s2.formWrapper}>
      <h2 className={s2.formTitle}>Choose your role</h2>
      <p className={s2.logIn}>
        Already have an account?{' '}
        <NavLink to='/login' className={s2.link}>
          Log in
        </NavLink>
      </p>
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
        <label className={`${s.inputWrapper} ${isValid ? s.valid : s.invalid}`}>
          <input
            onChange={handleChange}
            className={s.codeInput}
            name='code'
            value={code}
            placeholder='&#32;'
          />
          <span className={s.inputTitle}>Введіть код компанії</span>
        </label>
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
    </div>
  );
};
