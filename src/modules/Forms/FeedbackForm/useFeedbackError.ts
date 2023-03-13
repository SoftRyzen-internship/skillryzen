import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

interface FeedbackError {
  message: string;
}

export const useFeedbackError = () => {
  const { t } = useTranslation();

  const handleFeedbackError = useCallback(
    (error: AxiosError<FeedbackError>) => {
      if (error) {
        if (error.code === 'ERR_BAD_REQUEST') {
          return {
            message: t('feedbackForm.errors.badRequest'),
          };
        } else if (error.code === 'ERR_NETWORK') {
          return {
            message: t('feedbackForm.errors.network'),
          };
        } else {
          return {
            message: t('feedbackForm.errors.unknown'),
          };
        }
      } else {
        return {
          message: t('feedbackForm.errors.network'),
        };
      }
    },
    [t]
  );

  return handleFeedbackError;
};
