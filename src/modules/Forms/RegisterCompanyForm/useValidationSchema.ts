import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object({
    companyName: Yup.string()
      .min(2, t('editProfileForm.validation.companyName.min'))
      .max(30, t('editProfileForm.validation.companyName.max'))
      .required(t('auth.companyName.required'))
      .matches(/^(?!\s)(?!.*\s$)[\w\s]+$/, t('auth.noSpaces')),
  });
};
