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
        /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        t('editPasswordForm.validation.email.invalid')
      )
      .matches(
        /^[^.-].*[^.-]$/,
        t('editPasswordForm.validation.email.startsWithEndsWith')
      ),
    password: Yup.string()
      .test(
        'has-spaces',
        t('editPasswordForm.validation.currentPassword.spaces'),
        value => !/\s/.test(value)
      )
      .min(8, t('editPasswordForm.validation.currentPassword.min'))
      .required(t('editPasswordForm.validation.currentPassword.required')),
    checkbox: Yup.boolean().oneOf([true]).required(),
  });
};
