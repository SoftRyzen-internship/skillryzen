import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { useAppDispatch } from 'hooks/hook';

import { checkCompanyName, createCompany } from 'redux/authSlice/operations';
import { setStep } from 'redux/authSlice/authSlice';

import { AuthInput, MainButton } from 'ui-kit';

import { useValidationSchema } from './useValidationSchema';

import s from './RegisterCompanyForm.module.scss';

export const RegisterCompanyForm = () => {
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
      } else {
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
      <ul>
        <AuthInput
          name='companyName'
          type='text'
          id='companyName'
          onChange={handleChange}
          onBlur={handleCompanyNameBlur}
          value={companyName}
          autoComplete='company'
          placeholder={t('auth.companyNamePlaceholder')}
          touched={touched.companyName}
          error={errors.companyName}
          htmlFor='companyName'
          labelContent={t('auth.companyNamePlaceholder')}
        />
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
