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
      .max(50, t('editProfileForm.validation.name.max')),
    surname: Yup.string()
      .required(t('editProfileForm.validation.surname.required'))
      .min(2, t('editProfileForm.validation.surname.min'))
      .max(50, t('editProfileForm.validation.surname.max')),
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
    linkedin: Yup.string()
      .url(t('editProfileForm.validation.linkedin.url'))
      .matches(
        // eslint-disable-next-line no-useless-escape
        /linkedin\.com\/in\/([A-Za-z0-9\-]+)\/?$/,
        t('editProfileForm.validation.linkedin.pattern')
      ),
    telegram: Yup.string()
      .matches(/^[a-zA-Z_]/, t('editProfileForm.validation.telegram.start'))
      .matches(/[a-zA-Z0-9_]*$/, t('editProfileForm.validation.telegram.end'))
      .matches(/^(?!.*[@])/, t('editProfileForm.validation.telegram.at'))
      .matches(/[a-zA-Z]/, t('editProfileForm.validation.telegram.letter'))
      .min(5, t('editProfileForm.validation.telegram.min'))
      .max(32, t('editProfileForm.validation.telegram.max')),
  });
};
