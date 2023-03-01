import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import { AuthButton, Checkbox } from 'ui-kit';

import { ICONS } from 'theme';
import { registerSchema } from 'services/validationSchema';

import container from 'modules/dashboard/components/AuthSteps/AuthSteps.module.scss';
import s from './AuthFormStep2.module.scss';

import { IAuth } from 'modules/common/types';

interface MyFormValues {
  email: string;
  password: string;
  checkbox: boolean;
}

export const AuthFormStep2 = ({ setStep }: IAuth) => {
  const [showPassword, setShowPassword] = useState(false);

  // const handleClickGoogle = () => {};

  const formik = useFormik<MyFormValues>({
    initialValues: {
      email: '',
      password: '',
      checkbox: false,
    },

    validationSchema: registerSchema,

    onSubmit: (_values) => {
      setStep(3);
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
    <div className={container.formWrapper}>
      <h2 className={container.formTitle}>Get started for free</h2>
      <p className={container.logIn}>
        Already have an account?{' '}
        <NavLink to='/login' className={container.link}>
          Log in
        </NavLink>
      </p>
      <form onSubmit={handleSubmit} className={s.form}>
        <AuthButton
          // onClick={handleClickGoogle}
          size='large'
          text='Google'
          type='button'
          needBackground='noBackgroundGray'
          icon={<ICONS.GOOGLE className={s.googleIcon} />}
          className={s.googleButton}
          disabled
        />
        <div className={s.boxOr}>or</div>
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
            className={s.input}
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
            autoComplete='email'
            placeholder='Email address'
          />
          <label className={s.floatingLabel} htmlFor='email'>
            Email address
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
            className={s.input}
            name='password'
            type={showPassword ? 'text' : 'password'}
            id='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
            autoComplete='off'
            placeholder='Password'
          />
          <label className={s.floatingLabel} htmlFor='password'>
            Password
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
          label='By signing up, I agree to Lorem`s Terms of Service & Privacy
              Policy.'
          onChange={handleChange}
          labelClassName={s.checkboxLabel}
        />
        <AuthButton
          size='large'
          text='Continue'
          type='submit'
          disabled={!isValid || !dirty}
        />
      </form>
    </div>
  );
};
