import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import { AuthButton, Checkbox } from 'ui-kit';
import { ICONS } from 'theme';
import { RegisterSchema } from 'services/validationSchema';

import s from './AuthFormStep2.module.scss';
import container from 'modules/dashboard/components/AuthSteps/AuthSteps.module.scss';

interface MyFormValues {
  email: string;
  password: string;
}

export const AuthFormStep2 = ({ setStep }: any) => {
  const [isCheckedForm, setIsCheckedForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleInputChange = (event: { target: { value: string } }) => {
    handleChange(event);
    setHasValue(event.target.value !== '');
  };

  const handleAgreementCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsCheckedForm(event.target.checked);
  };

  const handleSubmitGoogle = () => {
    console.log('click google');
  };

  const formik = useFormik<MyFormValues>({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: RegisterSchema,

    onSubmit: (values) => {
      setStep(3);
    },
  });

  const {
    values: { email, password },
    isSubmitting,
    errors,
    touched,
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
          onClick={handleSubmitGoogle}
          size='large'
          text='Google'
          type='button'
          needBackground='noBackgroundGray'
        />
        <div className={s.boxOr}>
          <span className={s.boxOrLine}></span>
          <span className={s.boxOrLetters}>or</span>
          <span className={s.boxOrLine}></span>
        </div>
        <br />
        <div className={`${s.floatingGroup} ${hasValue ? s.hasValue : ''}`}>
          {touched.email && errors.email && (
            <>
              <div className={s.errorMsg}>{errors.email}</div>
            </>
          )}
          <input
            className={`${s.input} ${
              touched.email && errors.email ? s.inputError : ''
            } ${touched.email && !errors.email ? s.inputValid : ''}`}
            name='email'
            type='email'
            id='email'
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={email}
            autoComplete='email'
          />
          <label
            className={`${s.floatingLabel} ${
              touched.email && errors.email ? s.floatingLabelError : ''
            } ${touched.email && !errors.email ? s.floatingLabelValid : ''}`}
            htmlFor='email'
          >
            Email address
          </label>
        </div>
        <div className={`${s.floatingGroup} ${hasValue ? s.hasValue : ''}`}>
          {touched.password && errors.password && (
            <>
              <div className={s.errorMsg}>{errors.password}</div>
            </>
          )}
          <input
            className={`${s.input} ${
              touched.password && errors.password ? s.inputError : ''
            } ${touched.password && !errors.password ? s.inputValid : ''}`}
            name='password'
            type={showPassword ? 'text' : 'password'}
            id='password'
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={password}
            autoComplete='off'
          />
          <label
            className={`${s.floatingLabel} ${
              touched.password && errors.password ? s.floatingLabelError : ''
            } ${
              touched.password && !errors.password ? s.floatingLabelValid : ''
            }`}
            htmlFor='password'
          >
            Password
          </label>
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className={`${s.showPasswordButton} ${
              touched.password && errors.password
                ? s.showPasswordButtonError
                : ''
            } ${
              touched.password && !errors.password
                ? s.showPasswordButtonValid
                : ''
            }`}
          >
            {showPassword ? (
              <ICONS.EYE_CLOSED
                className={`${s.iconEye} ${
                  touched.password && errors.password ? s.iconEyeError : ''
                } ${
                  touched.password && !errors.password ? s.iconEyeValid : ''
                }`}
              />
            ) : (
              <ICONS.EYE_OPEN
                className={`${s.iconEye} ${
                  touched.password && errors.password ? s.iconEyeError : ''
                } ${
                  touched.password && !errors.password ? s.iconEyeValid : ''
                }`}
              />
            )}
          </button>
        </div>
        <div className={s.checkboxWrapper}>
          <Checkbox
            type='form'
            label='By signing up, I agree to Lorem`s Terms of Service & Privacy
              Policy.'
            onChange={handleAgreementCheckbox}
          />
        </div>

        <AuthButton
          onClick={handleSubmit}
          size='large'
          text='Continue'
          type='submit'
          disabled={!isSubmitting && !isCheckedForm}
        />
      </form>
    </div>
  );
};
