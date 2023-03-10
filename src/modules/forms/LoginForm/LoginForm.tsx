import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'routes/routes.const';
import { useAppDispatch } from 'hooks/hook';
import { logIn, auth } from 'redux/authSlice/operations';
import { setName } from 'redux/authSlice/authSlice';
import { randomName } from 'utils/randomName';
import { handleError } from 'utils/handleError';

import { MainButton, Checkbox } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';
import { useThemeContext } from 'context/themeContext';

import { IThemeContext } from 'constans/types';

import { useValidationSchema } from './useValidationSchema';

import s from './LoginForm.module.scss';

const objectTheme = {
  dark: {
    boxOr: s.boxOrDark,
    googleButton: s.googleButtonDark,
    input: s.inputDark,
  },
  light: {
    boxOr: s.boxOrLight,
    googleButton: s.googleButtonLight,
    input: s.inputLight,
  },
};

export const LoginForm = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      checkbox: false,
    },

    validationSchema: useValidationSchema(),

    onSubmit: async ({ email, password }) => {
      const resp = await dispatch(logIn({ email, password }));

      if (resp.meta.requestStatus === 'fulfilled') {
        dispatch(auth()).then((resp) => {
          if (resp.meta.requestStatus === 'fulfilled') {
            dispatch(setName(randomName()));
            navigate(ROUTES.CERTIFICATION);
          }
        });
      } else {
        setErrors(handleError({ resp, email, password, t }));
      }
    },
  });

  const {
    values: { email, password },
    errors,
    touched,
    isValid,
    isSubmitting,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    setErrors,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <MainButton
        size='large'
        text='Google'
        type='button'
        needBackground='noBackgroundGray'
        icon={<ICONS.GOOGLE className={s.googleIcon} />}
        className={objectTheme[theme].googleButton}
        disabled
      />
      <div className={objectTheme[theme].boxOr}>{t('auth.or')}</div>
      <div
        className={`${s.floatingGroup} ${
          touched.email &&
          (errors.email ? s.floatingLabelError : s.floatingLabelValid)
        }`}
      >
        {touched.email && errors.email && (
          <p className={s.errorMsg}>{errors.email}</p>
        )}
        <input
          className={objectTheme[theme].input}
          name='email'
          type='email'
          id='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
          autoComplete='email'
          placeholder={t('auth.emailPlaceholder')}
        />
        <label className={s.floatingLabel} htmlFor='email'>
          {t('auth.emailPlaceholder')}
        </label>
      </div>
      <div
        className={`${s.floatingGroup} ${
          touched.password &&
          (errors.password ? s.floatingLabelError : s.floatingLabelValid)
        }`}
      >
        {touched.password && errors.password && (
          <p className={s.errorMsg}>{errors.password}</p>
        )}
        <input
          className={objectTheme[theme].input}
          name='password'
          type={showPassword ? 'text' : 'password'}
          id='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={password}
          autoComplete='off'
          placeholder={t('auth.passwordPlaceholder')}
        />
        <label className={s.floatingLabel} htmlFor='password'>
          {t('auth.passwordPlaceholder')}
        </label>
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className={s.showPasswordButton}
        >
          {showPassword ? (
            <ICONS.EYE_CLOSED className={s.iconEye} />
          ) : (
            <ICONS.EYE_OPEN className={s.iconEye} />
          )}
        </button>
      </div>
      <div className={s.optionalWrapper}>
        <Checkbox
          id='checkbox'
          name='checkbox'
          type='custom'
          label={t('auth.rememberLabel')}
          onChange={handleChange}
          labelClassName={s.checkboxLabel}
        />
        <NavLink to='/' className={s.forgotPassword}>
          {t('auth.passwordLabel')}
        </NavLink>
      </div>
      <MainButton
        size='large'
        text={t('auth.continueBtn')}
        type='submit'
        disabled={!isValid || !dirty || isSubmitting}
      />
    </form>
  );
};
