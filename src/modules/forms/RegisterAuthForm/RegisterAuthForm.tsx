import { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { MainButton, Checkbox, AuthInput } from 'ui-kit';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { handleError } from 'utils/handleError';

import { setStep } from 'redux/authSlice/authSlice';
import { register, logIn } from 'redux/authSlice/operations';
import { getUserRole, getInvitationToken } from 'redux/authSlice/authSelectors';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import { useValidationSchema } from './useValidationSchema';
import s from './RegisterAuthForm.module.scss';

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

export const RegisterAuthForm = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const role = useAppSelector(getUserRole);
  const registrationInvitationToken = useAppSelector(getInvitationToken);

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      checkbox: false,
    },

    validationSchema: useValidationSchema(),

    onSubmit: async (values) => {
      const { email, password } = values;

      const resp = await dispatch(
        register({ email, password, role, registrationInvitationToken })
      );

      if (resp.meta.requestStatus === 'fulfilled') {
        dispatch(logIn({ email, password })).then(
          ({ meta }) =>
            meta.requestStatus === 'fulfilled' && dispatch(setStep(3))
        );
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
    dirty,
    isSubmitting,
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
      <ul className={s.inputList}>
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
              onClick={() => setShowPassword(!showPassword)}
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
      <Checkbox
        id='checkbox'
        name='checkbox'
        type='custom'
        label={t('auth.agreementLabel')}
        onChange={handleChange}
        labelClassName={s.checkboxLabel}
      />
      <MainButton
        size='large'
        text={t('auth.continueBtn')}
        type='submit'
        disabled={!isValid || !dirty || isSubmitting}
      />
    </form>
  );
};
