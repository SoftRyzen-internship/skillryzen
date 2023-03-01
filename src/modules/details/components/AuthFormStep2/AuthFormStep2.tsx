import { useFormik } from 'formik';
import { useState } from 'react';

import { AuthButton } from 'ui-kit/index';
import { Checkbox } from 'ui-kit/Checkbox';
import { ICONS } from 'theme';
import { validationSchema } from './validationRegistrForm';
import s from './AuthFormStep2.module.scss';
interface MyFormValues {
  email: string;
  password: string;
}

export const AuthFormStep2 = () => {
  const [isCheckedForm, setIsCheckedForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [_, setHasValue] = useState(false);

  const handleCheckboxFormStep2 = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsCheckedForm(event.target.checked);
  };

  const handleSubmitGoogle = () => {
    // console.log('click google');
  };

  const formik = useFormik<MyFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  const {
    values,
    isSubmitting,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  const { email, password } = values;

  const handleInputChange = (event: { target: { value: string } }) => {
    handleChange(event);
    setHasValue(event.target.value !== '');
  };
  const iconGoogle = <ICONS.GOOGLE className={s.googleIcon} />;

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <AuthButton
          onClick={handleSubmitGoogle}
          size='large'
          text='Google'
          type='button'
          needBackground='noBackgroundGray'
          icon={iconGoogle}
          className={s.googleButton}
          disabled
        />
        <div className={s.boxOr}>or</div>
        <br />
        <div
          className={`${s.floatingGroup} ${
            touched.email && errors.email
              ? s.floatingLabelError
              : touched.email && !errors.email
                ? s.floatingLabelValid
                : ''
          }`}
        >
          {touched.email && errors.email && (
            <>
              <p className={s.errorMsg}>{errors.email}</p>
            </>
          )}
          <input
            className={s.input}
            name='email'
            type='email'
            id='email'
            onChange={handleInputChange}
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
            touched.password && errors.password
              ? s.floatingLabelError
              : touched.password && !errors.password
                ? s.floatingLabelValid
                : ''
          }`}
        >
          {touched.password && errors.password && (
            <>
              <p className={s.errorMsg}>{errors.password}</p>
            </>
          )}
          <input
            className={s.input}
            name='password'
            type={showPassword ? 'text' : 'password'}
            id='password'
            onChange={handleInputChange}
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
          type='custom'
          label='By signing up, I agree to Lorem`s Terms of Service & Privacy
              Policy.'
          onChange={handleCheckboxFormStep2}
          labelClassName={s.checkboxLabel}
        />

        <AuthButton
          onClick={handleSubmit}
          size='large'
          text='Continue'
          type='submit'
          disabled={!isSubmitting && !isCheckedForm}
        />
      </form>
    </>
  );
};
