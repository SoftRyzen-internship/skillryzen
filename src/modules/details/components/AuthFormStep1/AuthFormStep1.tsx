import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { setRole, setStep } from 'redux/authSlice/authSlice';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { ICONS } from 'theme';
import { AuthButton } from 'ui-kit';

import s from './AuthFormStep1.module.scss';
import container from 'modules/dashboard/components/AuthSteps/AuthSteps.module.scss';

export const AuthFormStep1 = () => {
  const role = useAppSelector((state) => state.auth.role);
  const dispatch = useAppDispatch();

  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setStep(2));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRole(e.target.value));
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
    <div className={container.formWrapper}>
      <h2 className={container.formTitle}>Choose your role</h2>
      <p className={container.logIn}>
        Already have an account?{' '}
        <NavLink to='/login' className={container.link}>
          Log in
        </NavLink>
      </p>
      <form className={s.form} onSubmit={handleSubmit}>
        <fieldset>
          <legend className={s.formTitle}>Please choose your role</legend>
          <ul className={s.roleList}>
            <li>
              <input
                className='visually-hidden'
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
                className='visually-hidden'
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
        {role === 'candidate' && (
          <label className={`${s.label} ${isValid ? s.valid : s.invalid}`}>
            <input
              onChange={handleChange}
              className={s.codeInput}
              name='code'
              value={code}
              placeholder='&#32;'
            />
            <span className={s.inputTitle}>Введіть код компанії</span>
          </label>
        )}
        <ul
          style={{ minHeight: role === 'candidate' ? '160px' : '64px' }}
          className={s.buttonsList}
        >
          {isValid && role === 'candidate' && (
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
              disabled={!isValid && role === 'candidate'}
            />
          </li>
        </ul>
      </form>
    </div>
  );
};
