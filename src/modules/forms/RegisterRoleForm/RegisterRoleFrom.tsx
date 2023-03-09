import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { MainButton } from 'ui-kit';
import { setRole, setStep } from 'redux/authSlice/authSlice';
import { useAppDispatch, useAppSelector } from 'hooks/hook';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

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
  const { t } = useTranslation();

  const role = useAppSelector((state) => state.auth.user.role);
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
        <legend className={s.formTitle}>{t('auth.roleLabel')}</legend>
        <ul className={s.roleList}>
          <li>
            <input
              className='visually-hidden'
              type='radio'
              name='role'
              id='candidate'
              value='STUDENT'
              checked={role === 'STUDENT'}
              onChange={handleRoleChange}
            />
            <label
              htmlFor='candidate'
              className={`${s.roleBtn} ${objectTheme[theme].roleBtn}`}
            >
              <ICONS.USER className={s.icon} />
              {t('auth.candidate')}
            </label>
          </li>
          <li>
            <input
              className='visually-hidden'
              type='radio'
              name='role'
              id='company'
              value='COMPANY'
              checked={role === 'COMPANY'}
              onChange={handleRoleChange}
            />
            <label
              htmlFor='company'
              className={`${s.roleBtn} ${objectTheme[theme].roleBtn}`}
            >
              <ICONS.USERS className={s.icon} />
              {t('auth.company')}
            </label>
          </li>
        </ul>
      </fieldset>
      {role === 'STUDENT' && (
        <label className={`${s.label} ${isValid ? s.valid : s.invalid}`}>
          <input
            onChange={handleChange}
            className={objectTheme[theme].codeInput}
            name='code'
            value={code}
            placeholder='&#32;'
          />
          <span className={s.placeholder}>{t('auth.codePlaceholder')}</span>
        </label>
      )}
      <ul className={s.buttonsList}>
        {isValid && role === 'STUDENT' && (
          <li>
            <p className={s.buttonsTitle}>{t('auth.companyLabel')}</p>
            <MainButton
              className={objectTheme[theme].companyName}
              size='large'
              text='GoIT'
              type='button'
              needBackground='noBackgroundAccent'
            />
          </li>
        )}
        <li>
          <MainButton
            size='large'
            text={t('auth.accountBtn')}
            type='submit'
            color='blue'
            disabled={!isValid && role === 'STUDENT'}
          />
        </li>
      </ul>
    </form>
  );
};
