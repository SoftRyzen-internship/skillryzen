import { useFormik, FieldArray } from 'formik';
import { ICONS } from 'ui-kit/icons';
import { useTranslation } from 'react-i18next';

import { validationSchema } from './validationSchema';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import { MainButton, Input } from 'ui-kit';

import s from './InviteStudentByEmailForm.module.scss';

interface FormValues {
  emails: string[];
  text: string;
  code: string;
}

export const InviteStudentByEmailForm = () => {
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const formik = useFormik<FormValues>({
    initialValues: {
      emails: ['', '', '', ''],
      text: '',
      code: '',
    },

    validationSchema,
    onSubmit: (_values: FormValues) => {
      // console.log(values);
    },
  });
  const {
    values: { emails, text, code },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;
  const removeEmail = (arr: string[], index: number) => {
    arr.splice(index, 1);
    return arr;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className={s.label}>E-mail</h3>
        <ul>
          {emails.map((el, i) => (
            <li key={i} className={s.item}>
              <Input
                onChange={handleChange}
                name={`emails[${i}]`}
                value={el}
                placeholder='Lorem lorem'
                className={s.input}
              />
              <button
                onClick={() => setFieldValue('emails', removeEmail(emails, i))}
                className={s.removeButton}
                type='button'
              >
                <ICONS.CROSS_SMALL />
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setFieldValue('emails', emails.concat(''))}
          type='button'
          className={s.addButton}
        >
          <ICONS.PLUS className={s.addIcon} />
          Add another user
        </button>
        <h3 className={s.label}>Супровідний текст</h3>
        <Input
          onChange={handleChange}
          name='text'
          placeholder='Lorem lorem'
          className={`${s.input} ${s.mr20}`}
        />
        <h3 className={s.label}>Код для доступу</h3>
        <Input
          onChange={handleChange}
          name='code'
          placeholder='Lorem lorem'
          className={s.input}
        />
      </div>
      <MainButton
        size='large'
        text='Create invite'
        type='submit'
        disabled={!isValid}
        className={s.submitButton}
      />
    </form>
  );
};
