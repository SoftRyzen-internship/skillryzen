import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object({
    companyName: Yup.string()
      .min(2, t('editProfileForm.validation.companyName.min'))
      .max(30, t('editProfileForm.validation.companyName.max'))
      .matches(/^[\S]+[\S\s]*[\S]+$/, t('auth.noSpaces'))
      .required(t('auth.companyName.required')),
    companyWebsite: Yup.string()
      .matches(/^[\S]+[\S\s]*[\S]+$/, t('auth.noSpaces'))
      .matches(/^.{10,}$/, t('auth.urlLengthValidation'))
      .url(t('auth.urlValidation'))
      .required(t('auth.urlRequired')),
  });
};
