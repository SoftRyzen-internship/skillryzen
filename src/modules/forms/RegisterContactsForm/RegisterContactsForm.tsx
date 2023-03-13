import { useNavigate } from 'react-router';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { ROUTES } from 'routes/routes.const';
import { useAppDispatch } from 'hooks/hook';
import { auth } from 'redux/authSlice/operations';
import { setName } from 'redux/authSlice/authSlice';

import { ICONS } from 'ui-kit/icons';
import { MainButton } from 'ui-kit';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import { useValidationSchema } from './useValidationSchema';

import s from './RegisterContactsForm.module.scss';

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
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      companyName: '',
    },

    validationSchema: useValidationSchema(),

    onSubmit: async ({ name }) => {
      const resp = await dispatch(auth());

      if (resp.meta.requestStatus === 'fulfilled') {
        dispatch(setName(name));
        navigate(ROUTES.CERTIFICATION, { state: { from: location } });
      } else {
        setErrors({
          phone: t('auth.serverError'),
          name: t('auth.serverError'),
          surname: t('auth.serverError'),
        });
      }
    },
  });

  const {
    values: { name, surname, phone },
    isValid,
    isSubmitting,
    dirty,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setErrors,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <ul className={s.inputsList}>
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
            placeholder={t('auth.namePlaceholder')}
          />
          <label className={s.floatingLabel} htmlFor='name'>
            {t('auth.namePlaceholder')}
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
            placeholder={t('auth.surnamePlaceholder')}
          />
          <label className={s.floatingLabel} htmlFor='surname'>
            {t('auth.surnamePlaceholder')}
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
            placeholder={t('auth.phonePlaceholder')}
          />
          <label className={s.floatingLabelPhone} htmlFor='phone'>
            {t('auth.phonePlaceholder')}
          </label>
          <button type='button' className={objectTheme[theme].phoneButton}>
            <ICONS.UKRAINE />
          </button>
        </li>
      </ul>
      <MainButton
        className={s.btnSubmit}
        size='large'
        text={t('auth.continueBtn')}
        type='submit'
        disabled={!isValid || !dirty || isSubmitting}
      />
    </form>
  );
};
