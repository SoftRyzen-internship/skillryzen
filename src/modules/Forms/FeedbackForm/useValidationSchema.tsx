import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useValidationSchema = () => {
  const { t } = useTranslation();
  const MAX_MESSAGE_LENGTH = 5000;
  return Yup.object({
    message: Yup.string()
      .max(
        MAX_MESSAGE_LENGTH,
        `${t(
          'feedbackForm.validation.message.maxStart'
        )} ${MAX_MESSAGE_LENGTH} ${t('feedbackForm.validation.message.maxEnd')}`
      )
      .required(t('feedbackForm.validation.message.required')),
  });
};
