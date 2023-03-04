import React, { useState } from 'react';

import { ICONS } from 'ui-kit/icons';

import { AuthButton } from 'ui-kit/index';
import { setRole, setStep } from 'redux/authSlice/authSlice';
import { useAppDispatch, useAppSelector } from 'hooks/hook';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'modules/common/types';

import s from './RegisterRoleForm.module.scss';

const objectTheme = {
  dark: {
    roleBtn: s.roleBtnDark,
    codeInput: s.codeInputDark,
    companyName: s.companyNameDark,
  },
  light: {
    roleBtn: s.roleBtnLight,
    codeInput: s.codeInputLight,
    companyName: s.companyNameLight,
  },
};

export const RegisterRoleForm = () => {
  const { theme }: IThemeContext = useThemeContext();
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
            <label
              htmlFor='candidate'
              className={`${s.roleBtn} ${objectTheme[theme].roleBtn}`}
            >
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
            <label
              htmlFor='company'
              className={`${s.roleBtn} ${objectTheme[theme].roleBtn}`}
            >
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
            className={objectTheme[theme].codeInput}
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
              className={objectTheme[theme].companyName}
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
  );
};
