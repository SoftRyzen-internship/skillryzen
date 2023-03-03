import { useState } from 'react';
import { useFormik } from 'formik';

import { ICONS } from 'ui-kit/icons';

import { AuthButton, Checkbox } from 'ui-kit';
import { useAppDispatch } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';

import { validationSchema } from './validationSchema';

import s from './RegisterAuthForm.module.scss';

interface MyFormValues {
  email: string;
  password: string;
  checkbox: boolean;
}

export const RegisterAuthForm = () => {
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

    onSubmit: (_values) => {
      dispatch(setStep(3));
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
  );
};
