import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'routes/routes.const';
import { useAppDispatch } from 'hooks';
import { logIn, auth } from 'redux/authSlice/operations';
import { setName } from 'redux/authSlice/authSlice';
import { randomName } from 'utils/randomName';
import { handleError } from 'utils/handleError';

import { MainButton, Checkbox, AuthInput } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';
import { useThemeContext } from 'context/themeContext';

import { IThemeContext } from 'constans/types';

import { useValidationSchema } from './useValidationSchema';

import s from './LoginForm.module.scss';

const objectTheme = {
  dark: {
    boxOr: s.boxOrDark,
    googleButton: s.googleButtonDark,
  },
  light: {
    boxOr: s.boxOrLight,
    googleButton: s.googleButtonLight,
  },
};

export const LoginForm = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
  };

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
        dispatch(auth()).then(resp => {
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
      <ul className={s.inputsList}>
        <li>
          <AuthInput
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
            autoComplete='email'
            placeholder={t('auth.emailPlaceholder')}
            touched={touched.email}
            error={errors.email}
            htmlFor='email'
            labelContent={t('auth.emailPlaceholder')}
          />
        </li>
        <li>
          <AuthInput
            name='password'
            type={showPassword ? 'text' : 'password'}
            id='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
            autoComplete='off'
            placeholder={t('auth.passwordPlaceholder')}
            touched={touched.password}
            error={errors.password}
            htmlFor='password'
            labelContent={t('auth.passwordPlaceholder')}
          >
            <button
              type='button'
              onClick={handleClick}
              className={s.showPasswordButton}
            >
              {showPassword ? (
                <ICONS.EYE_CLOSED className={s.iconEye} />
              ) : (
                <ICONS.EYE_OPEN className={s.iconEye} />
              )}
            </button>
          </AuthInput>
        </li>
      </ul>
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
