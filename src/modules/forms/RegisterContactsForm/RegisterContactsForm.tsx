import InputMask from 'react-input-mask';
import { useFormik } from 'formik';

import { setStep } from 'redux/authSlice/authSlice';
import { useAppDispatch, useAppSelector } from 'hooks/hook';

import { ICONS } from 'ui-kit/icons';
import { AuthButton } from 'ui-kit';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'modules/common/types';

import { validationSchema } from './validationSchema';

import s from './RegisterContactsForm.module.scss';

interface FormValues {
  name: string;
  surname: string;
  phone: string;
  companyName?: string;
}

const objectTheme = {
  dark: {
    input: s.inputDark,
    inputPhone: s.inputPhoneDark,
    phoneButton: s.phoneButtonDark,
  },
  light: {
    input: s.inputLight,
    inputPhone: s.inputPhoneLight,
    phoneButton: s.phoneButtonLight,
  },
};

export const RegisterContactsForm = () => {
  const { theme }: IThemeContext = useThemeContext();
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.auth.role);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
    },

    validationSchema,

    onSubmit: (values) => {
      dispatch(setStep(4));
    },
  });

  const {
    values: { name, surname, phone, companyName },
    isValid,
    dirty,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <ul className={s.inputsList}>
        {role === 'company' && (
          <li
            className={`${s.floatingGroup} ${
              touched.companyName &&
              (errors.companyName ? s.floatingLabelError : s.floatingLabelValid)
            }`}
          >
            {touched.companyName && errors.companyName && (
              <p className={s.errorMsg}>{errors.companyName}</p>
            )}
            <input
              className={objectTheme[theme].input}
              name='companyName'
              type='text'
              id='companyName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={companyName}
              autoComplete='company'
              placeholder='Company name'
            />
            <label className={s.floatingLabel} htmlFor='companyName'>
              Company name
            </label>
          </li>
        )}
        <li
          className={`${s.floatingGroup} ${
            touched.name &&
            (errors.name ? s.floatingLabelError : s.floatingLabelValid)
          }`}
        >
          {touched.name && errors.name && (
            <p className={s.errorMsg}>{errors.name}</p>
          )}
          <input
            className={objectTheme[theme].input}
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
        </li>
        <li
          className={`${s.floatingGroup} ${
            touched.surname &&
            (errors.surname ? s.floatingLabelError : s.floatingLabelValid)
          }`}
        >
          {touched.surname && errors.surname && (
            <p className={s.errorMsg}>{errors.surname}</p>
          )}
          <input
            className={objectTheme[theme].input}
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
        </li>
        <li
          className={`${s.floatingGroup} ${
            touched.phone &&
            (errors.phone ? s.floatingLabelError : s.floatingLabelValid)
          }`}
        >
          {touched.phone && errors.phone && (
            <p className={s.errorMsg}>{errors.phone}</p>
          )}
          <InputMask
            className={objectTheme[theme].inputPhone}
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
          <button type='button' className={objectTheme[theme].phoneButton}>
            <ICONS.UKRAINE />
          </button>
        </li>
      </ul>
      <AuthButton
        className={s.btnSubmit}
        onClick={handleSubmit}
        size='large'
        text='Continue'
        type='submit'
        disabled={!isValid || !dirty}
      />
    </form>
  );
};
