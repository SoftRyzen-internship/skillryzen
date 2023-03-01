import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { useState } from 'react';

import { AuthButton } from 'ui-kit';
import { ICONS } from 'theme';

import s from './AuthFormStep3.module.scss';

interface FormValues {
  name: string;
  surname: string;
  phone: string;
}

export const AuthFormStep3 = () => {
  const phoneRegExp =
    /((\+38)\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/;
  const [hasValue, setHasValue] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Ім'я є обовязковим")
        .min(2, 'Повинно містити біле 2 символів')
        .max(50, 'Повинно містити не більше 50 символів'),
      // .matches(
      //   /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{2,50})$/,
      //   'Невірне імя'
      // ),
      surname: Yup.string()
        .required('Прізвище є обовязковим')
        .min(2, 'Повинно містити біле 2 символів')
        .max(50, 'Повинно містити не більше 50 символів'),

      phone: Yup.string()
        .required("Номер телефону є обов'язковим")
        .matches(phoneRegExp, 'Невірний формат телефону'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    values,
    isValid,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  const { name, surname, phone } = values;

  const handleInputChange = (event: { target: { value: string } }) => {
    handleChange(event);
    setHasValue(event.target.value !== '');
  };

  const handlePhoneInputChange = (event: { target: { value: string } }) => {
    event.target.value = event.target.value.replace(/ /g, '').replace(/_/g, '');

    handleChange(event);
    setHasValue(event.target.value !== '');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        {/* ПЕРШИЙ ІНПУТ */}
        <div className={`${s.floatingGroup} ${hasValue ? s.hasValue : ''}`}>
          {touched.name && errors.name && (
            <>
              <div className={s.errorMsg}>{errors.name}</div>
            </>
          )}
          <input
            className={`${s.input} ${
              touched.name && errors.name ? s.inputError : ''
            } ${touched.name && !errors.name ? s.inputValid : ''}`}
            name='name'
            type='text'
            id='name'
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={name}
            autoComplete='name'
            placeholder='Name'
          />
          <label
            className={`${s.floatingLabel} ${
              touched.name && errors.name ? s.floatingLabelError : ''
            } ${touched.name && !errors.name ? s.floatingLabelValid : ''}`}
            htmlFor='name'
          >
            Name
          </label>
        </div>
        {/* Другий ІНПУТ */}

        <div className={`${s.floatingGroup} ${hasValue ? s.hasValue : ''}`}>
          {touched.surname && errors.surname && (
            <>
              <div className={s.errorMsg}>{errors.surname}</div>
            </>
          )}
          <input
            className={`${s.input}  ${
              touched.surname && errors.surname ? s.inputError : ''
            } ${touched.surname && !errors.surname ? s.inputValid : ''}`}
            name='surname'
            type='text'
            id='surname'
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={surname}
            autoComplete='surname'
            placeholder='Surname'
          />
          <label
            className={`${s.floatingLabel} ${
              touched.surname && errors.surname ? s.floatingLabelError : ''
            } ${
              touched.surname && !errors.surname ? s.floatingLabelValid : ''
            }`}
            htmlFor='surname'
          >
            Surname
          </label>
        </div>

        {/* Третій ІНПУТ */}
        <div className={`${s.floatingGroup} ${hasValue ? s.hasValue : ''}`}>
          {touched.phone && errors.phone && (
            <>
              <div className={s.errorMsg}>{errors.phone}</div>
            </>
          )}
          <InputMask
            className={`${s.input} ${s.inputPhone} ${
              touched.phone && errors.phone ? s.inputError : ''
            } ${touched.phone && !errors.phone ? s.inputValid : ''}`}
            name='phone'
            type='phone'
            mask='+380 99 999 99 99'
            id='phone'
            onChange={handlePhoneInputChange}
            onBlur={handleBlur}
            value={phone}
            autoComplete='off'
            placeholder='Phone'
          />
          <label
            className={`${s.floatingLabel} ${s.floatingLabelPhone} ${
              touched.phone && errors.phone ? s.floatingLabelError : ''
            } ${touched.phone && !errors.phone ? s.floatingLabelValid : ''}`}
            htmlFor='phone'
          >
            Phone
          </label>
          <button
            type='button'
            onClick={() => console.log(`klikc`)}
            className={`${s.phoneButton} ${
              touched.phone && errors.phone ? s.phoneButton : ''
            } ${touched.phone && !errors.phone ? s.phoneButton : ''}`}
          >
            <ICONS.UKRAINE />
          </button>
        </div>

        <AuthButton
          className={s.btnSubmit}
          onClick={handleSubmit}
          size='large'
          text='Continue'
          type='submit'
          disabled={!(hasValue && isValid)}
        />
      </form>
    </>
  );
};
