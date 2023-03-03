import { useFormik } from 'formik';
import InputMask from 'react-input-mask';

import { setStep } from 'redux/authSlice/authSlice';
import { useAppDispatch } from 'hooks/hook';

import { AuthButton } from 'ui-kit';
import { ICONS } from 'theme';
import { contactInfoSchema } from 'services/validationSchema';

import container from 'modules/dashboard/components/AuthSteps/AuthSteps.module.scss';
import s from './AuthFormStep3.module.scss';

interface FormValues {
  name: string;
  surname: string;
  phone: string;
}

export const AuthFormStep3 = () => {
  const dispatch = useAppDispatch();

  const handleClickSkipBtn = () => {
    dispatch(setStep(4));
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
    },

    validationSchema: contactInfoSchema,

    onSubmit: (values) => {
      dispatch(setStep(4));
    },
  });

  const {
    values: { name, surname, phone },
    isValid,
    dirty,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <div className={container.formWrapper}>
      <h2 className={container.formTitle}>
        Give us more <br />
        information about you!
      </h2>
      <p className={container.logIn}>Lorem lorem</p>
      <form onSubmit={handleSubmit} className={s.form}>
        {/* ПЕРШИЙ ІНПУТ */}
        <div
          className={`${s.floatingGroup} ${
            touched.name &&
            (errors.name ? s.floatingLabelError : s.floatingLabelValid)
          }`}
        >
          {touched.name && errors.name && (
            <p className={s.errorMsg}>{errors.name}</p>
          )}
          <input
            className={s.input}
            name='name'
            type='text'
            id='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={name}
            autoComplete='name'
            placeholder='Name'
          />
          <label className={s.floatingLabel} htmlFor='name'>
            Name
          </label>
        </div>
        {/* Другий ІНПУТ */}
        <div
          className={`${s.floatingGroup} ${
            touched.surname &&
            (errors.surname ? s.floatingLabelError : s.floatingLabelValid)
          }`}
        >
          {touched.surname && errors.surname && (
            <p className={s.errorMsg}>{errors.surname}</p>
          )}
          <input
            className={s.input}
            name='surname'
            type='text'
            id='surname'
            onChange={handleChange}
            onBlur={handleBlur}
            value={surname}
            autoComplete='surname'
            placeholder='Surname'
          />
          <label className={s.floatingLabel} htmlFor='surname'>
            Surname
          </label>
        </div>
        {/* Третій ІНПУТ */}
        <div
          className={`${s.floatingGroup} ${
            touched.phone &&
            (errors.phone ? s.floatingLabelError : s.floatingLabelValid)
          }`}
        >
          {touched.phone && errors.phone && (
            <p className={s.errorMsg}>{errors.phone}</p>
          )}
          <InputMask
            className={s.inputPhone}
            name='phone'
            type='phone'
            mask='+380 99 999 99 99'
            id='phone'
            onChange={handleChange}
            onBlur={handleBlur}
            value={phone}
            autoComplete='off'
            placeholder='Phone'
          />
          <label className={s.floatingLabelPhone} htmlFor='phone'>
            Phone
          </label>
          <button type='button' className={s.phoneButton}>
            <ICONS.UKRAINE />
          </button>
        </div>
        <AuthButton
          className={s.btnSubmit}
          onClick={handleSubmit}
          size='large'
          text='Continue'
          type='submit'
          disabled={!isValid || !dirty}
        />
      </form>
      <button onClick={handleClickSkipBtn} className={s.skipBtn} type='button'>
        Do this later
      </button>
    </div>
  );
};
