import { useFormik } from 'formik';
import { ICONS } from 'ui-kit/icons';
import { useTranslation } from 'react-i18next';

import { validationSchema } from './validationSchema';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import { MainButton, Input, Checkbox } from 'ui-kit';

import s from './InviteAdminByEmailForm.module.scss';

interface FormValues {
  email: string;
  createTest: boolean;
  addUsers: boolean;
  deleteUsers: boolean;
  text: string;
  code: string;
}

export const InviteAdminByEmailForm = () => {
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      createTest: false,
      addUsers: false,
      deleteUsers: false,
      text: '',
      code: '',
    },

    validationSchema,
    onSubmit: (_values: FormValues) => {
      // console.log(values);
    },
  });
  const {
    values: { email, createTest, addUsers, deleteUsers, text, code },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className={s.label}>E-mail</h3>

        <Input
          onChange={handleChange}
          name='email'
          value={email}
          placeholder='Lorem lorem'
          className={`${s.input} ${s[`input--${theme}`]} ${s.mr20}`}
        />
        <h3 className={`${s.label} ${s.mr17}`}>Role</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <p>Create test</p>{' '}
            <Checkbox
              name='createTest'
              id='createTest'
              initialState={createTest}
              onChange={handleChange}
            />
          </li>
          <li className={s.item}>
            <p>Add users</p>{' '}
            <Checkbox
              name='addUsers'
              id='addUsers'
              initialState={addUsers}
              onChange={handleChange}
            />
          </li>
          <li className={s.item}>
            <p>Delete users</p>{' '}
            <Checkbox
              name='deleteUsers'
              id='deleteUsers'
              initialState={deleteUsers}
              onChange={handleChange}
            />
          </li>
        </ul>
        <h3 className={s.label}>Супровідний текст</h3>
        <Input
          onChange={handleChange}
          name='text'
          value={text}
          placeholder='Lorem lorem'
          className={`${s.input} ${s[`input--${theme}`]} ${s.mr20}`}
        />
        <h3 className={s.label}>
          Код для доступу <ICONS.ASTERIX className={s.asterixIcon} />
        </h3>
        <Input
          onChange={handleChange}
          name='code'
          value={code}
          placeholder='Lorem lorem'
          className={`${s.input} ${s[`input--${theme}`]}`}
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
