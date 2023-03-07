import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object({
    email: Yup.string()
      .email(t('editPasswordForm.validation.email.invalid'))
      .required(t('editPasswordForm.validation.email.required'))
      .max(63, t('editPasswordForm.validation.email.max'))
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        t('editPasswordForm.validation.email.regex')
      )
      .matches(
        /^[^.-].*[^.-]$/,
        t('editPasswordForm.validation.email.startsWithEndsWith')
      ),
    currentPassword: Yup.string()
      .required(t('editPasswordForm.validation.currentPassword.required'))
      .min(8, t('editPasswordForm.validation.currentPassword.min')),
    newPassword: Yup.string()
      .min(8, t('editPasswordForm.validation.newPassword.min'))
      .required(t('editPasswordForm.validation.newPassword.required')),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('newPassword'), null],
        t('editPasswordForm.validation.confirmPassword.oneOf')
      )
      .required(t('editPasswordForm.validation.confirmPassword.required')),
  });
};
