import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { useAppDispatch } from 'hooks/hook';
import { checkCompanyName, createCompany } from 'redux/authSlice/operations';
import { setStep } from 'redux/authSlice/authSlice';

import { MainButton } from 'ui-kit';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import { useValidationSchema } from './useValidationSchema';

import s from './RegisterCompanyForm.module.scss';

const objectTheme = {
  dark: {
    input: s.inputDark,
  },
  light: {
    input: s.inputLight,
  },
};

export const RegisterCompanyForm = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const [isAvailable, setIsAvailable] = useState(false);

  const handleCompanyNameBlur = async (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    handleBlur(e);

    if (isValid) {
      const resp = await dispatch(checkCompanyName({ companyName }));

      setIsAvailable(resp.payload.isAvailable);

      !resp.payload.isAvailable
        ? setErrors({ companyName: t('auth.companyName.exists') })
        : setErrors({ companyName: '' });
    }
  };

  const formik = useFormik({
    initialValues: {
      companyName: '',
    },

    validationSchema: useValidationSchema(),

    onSubmit: async ({ companyName }) => {
      const resp = await dispatch(createCompany({ companyName }));

      if (resp.meta.requestStatus === 'fulfilled') {
        dispatch(setStep(4));
      }

      if (resp.meta.requestStatus === 'rejected') {
        setErrors({
          companyName: t('auth.serverError'),
        });
      }
    },
  });

  const {
    values: { companyName },
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
            onBlur={handleCompanyNameBlur}
            value={companyName}
            autoComplete='company'
            placeholder={t('auth.companyNamePlaceholder')}
          />
          <label className={s.floatingLabel} htmlFor='companyName'>
            {t('auth.companyNamePlaceholder')}
          </label>
        </li>
      </ul>
      <MainButton
        className={s.btnSubmit}
        size='large'
        text={t('auth.continueBtn')}
        type='submit'
        disabled={!isAvailable || !dirty || isSubmitting}
      />
    </form>
  );
};
