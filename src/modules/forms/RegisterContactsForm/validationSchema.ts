import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object({
    companyName: Yup.string()
      .min(2, t('editProfileForm.validation.companyName.min'))
      .max(50, t('editProfileForm.validation.companyName.max')),
    name: Yup.string()
      .required(t('editProfileForm.validation.name.required'))
      .min(2, t('editProfileForm.validation.name.min'))
      .max(30, t('editProfileForm.validation.name.max')),
    surname: Yup.string()
      .required(t('editProfileForm.validation.surname.required'))
      .min(2, t('editProfileForm.validation.surname.min'))
      .max(30, t('editProfileForm.validation.surname.max')),
    phone: Yup.string()
      .transform((value, originalValue) => {
        return originalValue
          ? originalValue.replace(/ /g, '').replace(/_/g, '')
          : '';
      })
      .matches(
      // eslint-disable-next-line no-useless-escape
        /((\+38)\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/,
        t('editProfileForm.validation.phone.format')
      )
      .required(t('editProfileForm.validation.phone.required')),
  });
};
