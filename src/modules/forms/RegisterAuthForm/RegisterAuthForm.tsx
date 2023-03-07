import { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { AuthButton, Checkbox } from 'ui-kit';
import { useAppDispatch } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';
import { register, logIn } from 'redux/authSlice/operations';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'modules/common/types';

import { validationSchema } from './validationSchema';

import s from './RegisterAuthForm.module.scss';

interface MyFormValues {
  email: string;
  password: string;
  checkbox: boolean;
}

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

export const RegisterAuthForm = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  // const handleClickGoogle = () => {};

  const formik = useFormik<MyFormValues>({
    initialValues: {
      email: '',
      password: '',
      checkbox: false,
    },

    validationSchema,

    onSubmit: async (values) => {
      const { email, password } = values;

      try {
        await dispatch(register({ email, password, displayName: 'coolName' }));
        await dispatch(logIn({ email, password }));
        dispatch(setStep(3));
      } catch (err) {
        console.log(err);
      }
    },
  });

  const {
    values: { email, password },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <AuthButton
        // onClick={handleClickGoogle}
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
      <Checkbox
        id='checkbox'
        name='checkbox'
        type='custom'
        label={t('auth.agreementLabel')}
        onChange={handleChange}
        labelClassName={s.checkboxLabel}
      />
      <AuthButton
        size='large'
        text={t('auth.continueBtn')}
        type='submit'
        disabled={!isValid || !dirty}
      />
    </form>
  );
};
