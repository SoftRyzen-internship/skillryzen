import { useFormik } from 'formik';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import { MainButton } from 'ui-kit';
import { pluralize } from 'utils/pluralize';
import { IThemeContext } from 'constans/types';
import { useFeedbackError } from './useFeedbackError';
import { useThemeContext } from 'context/themeContext';
import { useValidationSchema } from './useValidationSchema';
import { sendFeedbackService } from 'services/feedbackService';

import s from './FeedbackForm.module.scss';

interface FormValues {
  message: string;
}

interface FeedbackProps {
  sendFeedback?: (_value: boolean) => void;
  updateLoading: (_value: boolean) => void;
  userEmail: string;
  userName?: string;
  userRole?: string;
  sheetName?: string;
}

export const FeedbackForm = ({
  sendFeedback,
  updateLoading,
  userEmail,
  userName,
  userRole,
  sheetName,
}: FeedbackProps) => {
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const validationSchema = useValidationSchema();
  const handleFeedbackError = useFeedbackError();
  const { pathname } = useLocation();
  const formik = useFormik<FormValues>({
    initialValues: {
      message: '',
    },

    validationSchema,

    onSubmit: async values => {
      updateLoading(true);
      try {
        await sendFeedbackService({
          sheetName,
          name: userName,
          role: userRole,
          email: userEmail,
          message: values.message,
          pathname,
        });
        sendFeedbackService && sendFeedback(true);
        resetForm();
      } catch (error) {
        const feedbackError = handleFeedbackError(error);
        setErrors({
          message: feedbackError.message,
        });
      } finally {
        updateLoading(false);
      }
    },
  });
  const {
    values: { message },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    setErrors,
  } = formik;
  const MAX_MESSAGE_LENGTH = 5000;
  const remainingCharacters = MAX_MESSAGE_LENGTH - message.length;

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.textareaContainer}>
          <textarea
            className={`${s.textarea} ${s[`textarea--${theme}`]}`}
            id='message'
            name='message'
            onChange={handleChange}
            onBlur={handleBlur}
            value={message}
            maxLength={MAX_MESSAGE_LENGTH}
            placeholder={t('feedbackForm.placeholder')}
          />
          {touched.message && errors.message && (
            <p className={s.errorMsg}>{errors.message}</p>
          )}
          <div className={s.charactersRemaining}>
            {t('feedbackForm.count.start')} {remainingCharacters}
            {pluralize(remainingCharacters, [
              t('feedbackForm.count.end1'),
              t('feedbackForm.count.end2'),
              t('feedbackForm.count.end3'),
            ])}
          </div>
        </div>
        <MainButton
          size='small'
          text={t('feedbackForm.button.send')}
          type='submit'
          disabled={!isValid || !dirty}
          className={s.btn}
        />
      </form>
    </div>
  );
};
