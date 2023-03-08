import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import s from './FeedbackForm.module.scss';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { useValidationSchema } from './useValidationSchema';
import axios from 'axios';
import { AuthButton } from 'ui-kit';

interface FormValues {
  message: string;
  email: string;
}

interface FeedbackProps {
  updateData: (_value: boolean) => void;
  updateLoading: (_value: boolean) => void;
  userEmail: string;
}

export const FeedbackForm = ({
  updateData,
  updateLoading,
  userEmail,
}: FeedbackProps) => {
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const validationSchema = useValidationSchema();

  const formik = useFormik<FormValues>({
    initialValues: {
      message: '',
      email: '',
    },

    validationSchema,

    onSubmit: (values) => {
      const formData = new FormData();
      formData.set('email', userEmail);
      formData.set('message', values.message);
      updateLoading(true);
      axios
        .post(
          'https://script.google.com/macros/s/AKfycbw8xjZg1xVclswFVvlvM2goPJRQ47VPOPPsuIe6RkYvOBtRg_6IQGONJRNzafiU7BOiOA/exec',
          formData
        )
        .then((res) => {
          res.data;
          updateData(true);
          resetForm();
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        })
        .finally(() => {
          updateLoading(false);
        });
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
  } = formik;
  const MAX_MESSAGE_LENGTH = 5000;
  const remainingCharacters = MAX_MESSAGE_LENGTH - message.length;
  function pluralize(num: number, words: [string, string, string]): string {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
      num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
    ];
  }
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

        <AuthButton
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
