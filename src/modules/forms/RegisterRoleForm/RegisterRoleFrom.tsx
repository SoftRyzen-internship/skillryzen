import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { MainButton } from 'ui-kit';

import { useAppDispatch, useAppSelector } from 'hooks';

import { getUserRole, getCompanyName } from 'redux/authSlice/authSelectors';
import { setRole, setStep, setToken } from 'redux/authSlice/authSlice';
import { getCompanyByToken } from 'redux/authSlice/operations';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constants/types';

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

const regex = /^[A-Z0-9]{22}$/;

export const RegisterRoleForm = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const role = useAppSelector(getUserRole);
  const dispatch = useAppDispatch();
  const companyName = useAppSelector(getCompanyName);

  // const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (role === 'CANDIDATE') {
    //   dispatch(setToken(code));
    // }

    dispatch(setStep(2));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRole(e.target.value));
  };

  // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const token = e.target.value.trim();

  //   setCode(token);

  //   if (token.match(regex)) {
  //     const resp = await dispatch(getCompanyByToken(token));

  //     if (resp.meta.requestStatus === 'fulfilled') {
  //       setIsValid(true);
  //     } else {
  //       setIsValid(false);
  //     }
  //   }
  // };

  // const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  //   const token = e.target.value;

  //   if (!token.match(regex)) {
  //     setIsValid(false);
  //   }
  // };

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
              value='CANDIDATE'
              checked={role === 'CANDIDATE'}
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
              value='COMPANY_OWNER'
              checked={role === 'COMPANY_OWNER'}
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
      {/* {role === 'CANDIDATE' && (
        <label
          className={`${s.label} ${
            (isValid === false && s.invalid) || (isValid === true && s.valid)
          }`}
        >
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={objectTheme[theme].codeInput}
            name='code'
            value={code}
            placeholder='&#32;'
          />
          <span className={s.placeholder}>{t('auth.codePlaceholder')}</span>
          <p className={s.errMsg}>
            {isValid === false &&
              (code.length > 0
                ? t('auth.codeValidation')
                : t('auth.codeRequired'))}
          </p>
        </label>
      )} */}
      <ul className={s.buttonsList}>
        {companyName && role === 'CANDIDATE' && isValid && (
          <li>
            <p className={s.buttonsTitle}>{t('auth.companyLabel')}</p>
            <MainButton
              className={objectTheme[theme].companyName}
              size='large'
              text={companyName}
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
            // disabled={!isValid && role === 'CANDIDATE'}
          />
        </li>
      </ul>
    </form>
  );
};
