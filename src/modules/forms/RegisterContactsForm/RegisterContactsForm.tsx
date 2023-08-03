import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constants/types';
import { ROUTES } from 'routes/routes.const';
import { useAppDispatch } from 'hooks';

import { auth } from 'redux/authSlice/operations';
import { setName } from 'redux/authSlice/authSlice';

import { ICONS } from 'ui-kit/icons';
import { MainButton, AuthInput } from 'ui-kit';

import { useValidationSchema } from './useValidationSchema';

import s from './RegisterContactsForm.module.scss';

const objectTheme = {
  dark: {
    phoneButton: s.phoneButtonDark,
  },
  light: {
    phoneButton: s.phoneButtonLight,
  },
};

export const RegisterContactsForm = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
    },

    validationSchema: useValidationSchema(),

    onSubmit: async ({ name }) => {
      const resp = await dispatch(auth());

      if (resp.meta.requestStatus === 'fulfilled') {
        dispatch(setName(name));
        navigate(ROUTES.CERTIFICATION, { state: { from: location } });
      } else {
        setErrors({
          phone: t('auth.serverError'),
          name: t('auth.serverError'),
          surname: t('auth.serverError'),
        });
      }
    },
  });

  const {
    values: { name, surname, phone },
    isValid,
    isSubmitting,
    dirty,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setErrors,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <ul className={s.inputsList}>
        <li>
          <AuthInput
            name='name'
            type='text'
            id='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={name}
            autoComplete='name'
            placeholder={t('auth.namePlaceholder')}
            touched={touched.name}
            error={errors.name}
            htmlFor='name'
            labelContent={t('auth.namePlaceholder')}
          />
        </li>
        <li>
          <AuthInput
            name='surname'
            type='text'
            id='surname'
            onChange={handleChange}
            onBlur={handleBlur}
            value={surname}
            autoComplete='surname'
            placeholder={t('auth.surnamePlaceholder')}
            touched={touched.surname}
            error={errors.surname}
            htmlFor='surname'
            labelContent={t('auth.surnamePlaceholder')}
          />
        </li>
        <li>
          <AuthInput
            className={s.phoneInput}
            name='phone'
            type='phone'
            mask='+380 99 999 99 99'
            id='phone'
            onChange={handleChange}
            onBlur={handleBlur}
            value={phone}
            autoComplete='phone'
            placeholder={t('auth.phonePlaceholder')}
            touched={touched.phone}
            error={errors.phone}
            htmlFor='phone'
            labelContent={t('auth.phonePlaceholder')}
          >
            <button type='button' className={objectTheme[theme].phoneButton}>
              <ICONS.UKRAINE />
            </button>
          </AuthInput>
        </li>
      </ul>
      <MainButton
        className={s.btnSubmit}
        size='large'
        text={t('auth.continueBtn')}
        type='submit'
        disabled={!isValid || !dirty || isSubmitting}
      />
    </form>
  );
};
