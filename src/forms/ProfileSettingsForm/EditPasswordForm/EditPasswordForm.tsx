import { useState } from 'react';
import { useFormik } from 'formik';
import { ICONS } from 'ui-kit/icons';

import container from 'modules/dashboard/components/AuthSteps/AuthSteps.module.scss';
import s from './EditPasswordForm.module.scss';
import { validationSchema } from './validationSchema';

interface MyFormValues {
  email: string;
  password: string;
}

export const EditPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik<MyFormValues>({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema,

    onSubmit: (_values) => {
      //   console.log('first');
    },
  });

  const {
    values: { email, password },
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <div className={container.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
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
      </form>
    </div>
  );
};
