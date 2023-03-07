import { useNavigate } from 'react-router';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'hooks/hook';

import { ICONS } from 'ui-kit/icons';
import { AuthButton } from 'ui-kit';
import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

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
  const { t } = useTranslation();

  const navigate = useNavigate();
  const role = useAppSelector((state) => state.auth.user.role);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      companyName: '',
    },

    validationSchema,

    onSubmit: (values) => {
      navigate(ROUTES.STUDENT);
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
        {role === 'COMPANY' && (
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
              placeholder={t('auth.companyNamePlaceholder')}
            />
            <label className={s.floatingLabel} htmlFor='companyName'>
              {t('auth.companyNamePlaceholder')}
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
      <AuthButton
        className={s.btnSubmit}
        onClick={handleSubmit}
        size='large'
        text={t('auth.continueBtn')}
        type='submit'
        disabled={!isValid || !dirty}
      />
    </form>
  );
};
