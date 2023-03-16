import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './EditProfileForm.module.scss';
import { useValidationSchema } from './useValidationSchema';
import { ICONS } from 'ui-kit/icons';
import { MainButton } from 'ui-kit';
import { useAppSelector } from 'hooks/hook';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { getUserRole } from 'redux/authSlice/authSelectors';

interface FormValues {
  name?: string;
  surname?: string;
  phone?: string;
  companyName?: string;
  position?: string;
  company?: string;
  telegram?: string;
  linkedin?: string;
  role?: string;
}

export const EditProfileForm = () => {
  const [changeProfile, setChangeProfile] = useState(true);
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const validationSchema = useValidationSchema();
  const userRole = useAppSelector(getUserRole);
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      position: userRole,
      telegram: '',
      linkedin: '',
      role: '',
    },

    validationSchema,
    onSubmit: (values: FormValues) => {
      // console.log(values);
    },
  });

  const {
    values: { name, telegram, linkedin, surname, phone },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = formik;
  const handleCancel = () => {
    resetForm();
    setChangeProfile(true);
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <ul className={s.inputsList}>
          <li
            className={`${s.floatingGroup} ${
              touched.name &&
              (errors.name ? s.floatingLabelError : s.floatingLabelValid)
            }`}
          >
            {touched.name && errors.name && (
              <p className={s.errorMsg}>{errors.name}</p>
            )}
            <input
              className={`${s.input} ${
                !changeProfile ? s[`inputEdit--${theme}`] : ''
              }`}
              name='name'
              type='text'
              id='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={name}
              autoComplete='name'
              placeholder={t('editProfileForm.name')}
              disabled={changeProfile}
            />
            <label
              className={`${s.floatingLabel} ${s[`floatingLabel--${theme}`]}`}
              htmlFor='name'
            >
              {t('editProfileForm.name')}
            </label>
            <button
              type='button'
              onClick={() => setChangeProfile(!changeProfile)}
              className={s.changeButton}
            >
              <ICONS.EDIT className={s.iconEdit} />
            </button>
          </li>
          <li className={`${s.floatingGroup}`}>
            <input
              className={`${s.input} ${s[`input--${theme}`]}`}
              name='position'
              type='text'
              id='position'
              onChange={handleChange}
              onBlur={handleBlur}
              value={userRole}
              autoComplete='off'
              placeholder={t('editProfileForm.position')}
              disabled={true}
            />
            <label
              className={`${s.floatingLabel} ${s[`floatingLabel--${theme}`]}`}
              htmlFor='position'
            >
              {t('editProfileForm.position')}
            </label>
            <button
              type='button'
              onClick={() => setChangeProfile(!changeProfile)}
              className={s.changeButton}
            >
              <ICONS.SHIELD_CHECK className={s.iconShield} />
            </button>
          </li>
          <li
            className={`${s.floatingGroup} ${
              touched.surname &&
              (errors.surname ? s.floatingLabelError : s.floatingLabelValid)
            }`}
          >
            {touched.surname && errors.surname && (
              <p className={s.errorMsg}>{errors.surname}</p>
            )}
            <input
              className={`${s.input} ${
                !changeProfile ? s[`inputEdit--${theme}`] : ''
              }`}
              name='surname'
              type='text'
              id='surname'
              onChange={handleChange}
              onBlur={handleBlur}
              value={surname}
              autoComplete='surname'
              placeholder={t('editProfileForm.surname')}
              disabled={changeProfile}
            />
            <label
              className={`${s.floatingLabel} ${s[`floatingLabel--${theme}`]}`}
              htmlFor='surname'
            >
              {t('editProfileForm.surname')}
            </label>
            <button
              type='button'
              onClick={() => setChangeProfile(!changeProfile)}
              className={s.changeButton}
            >
              <ICONS.EDIT className={s.iconEdit} />
            </button>
          </li>
          <li
            className={`${s.floatingGroup} ${
              touched.phone &&
              (errors.phone ? s.floatingLabelError : s.floatingLabelValid)
            }`}
          >
            {touched.phone && errors.phone && (
              <p className={s.errorMsg}>{errors.phone}</p>
            )}
            <InputMask
              className={s.inputPhone}
              name='phone'
              type='phone'
              mask='+380 99 999 99 99'
              id='phone'
              onChange={handleChange}
              onBlur={handleBlur}
              value={phone}
              autoComplete='off'
              placeholder={t('editProfileForm.phone')}
              disabled={changeProfile}
            />
            <label
              className={`${s.floatingLabelPhone} ${
                s[`floatingLabelPhone--${theme}`]
              }`}
              htmlFor='phone'
            >
              {t('editProfileForm.phone')}
            </label>
            <button type='button' className={s.phoneButton}>
              <ICONS.UKRAINE />
            </button>
            <button
              type='button'
              onClick={() => setChangeProfile(!changeProfile)}
              className={s.changeButton}
            >
              <ICONS.EDIT className={s.iconEdit} />
            </button>
          </li>
          <li
            className={`${s.floatingGroup} ${
              touched.telegram &&
              (errors.telegram ? s.floatingLabelError : s.floatingLabelValid)
            }`}
          >
            {touched.telegram && errors.telegram && (
              <p className={s.errorMsg}>{errors.telegram}</p>
            )}
            <input
              className={`${s.input} ${
                !changeProfile ? s[`inputEdit--${theme}`] : ''
              }`}
              name='telegram'
              type='text'
              id='telegram'
              onChange={handleChange}
              onBlur={handleBlur}
              value={telegram}
              autoComplete='off'
              placeholder={t('editProfileForm.telegram')}
              disabled={changeProfile}
            />
            <label
              className={`${s.floatingLabel} ${s[`floatingLabel--${theme}`]}`}
              htmlFor='telegram'
            >
              {t('editProfileForm.telegram')}
            </label>
            <button
              type='button'
              onClick={() => setChangeProfile(!changeProfile)}
              className={s.changeButton}
            >
              <ICONS.EDIT className={s.iconEdit} />
            </button>
          </li>
          <li
            className={`${s.floatingGroup} ${
              touched.linkedin &&
              (errors.linkedin ? s.floatingLabelError : s.floatingLabelValid)
            }`}
          >
            {touched.linkedin && errors.linkedin && (
              <p className={s.errorMsg}>{errors.linkedin}</p>
            )}
            <input
              className={`${s.input} ${
                !changeProfile ? s[`inputEdit--${theme}`] : ''
              }`}
              name='linkedin'
              type='text'
              id='linkedin'
              onChange={handleChange}
              onBlur={handleBlur}
              value={linkedin}
              autoComplete='off'
              placeholder={t('editProfileForm.linkedin')}
              disabled={changeProfile}
            />
            <label
              className={`${s.floatingLabel} ${s[`floatingLabel--${theme}`]}`}
              htmlFor='linkedin'
            >
              {t('editProfileForm.linkedin')}
            </label>
            <button
              type='button'
              onClick={() => setChangeProfile(!changeProfile)}
              className={s.changeButton}
            >
              <ICONS.EDIT className={s.iconEdit} />
            </button>
          </li>
        </ul>

        <div className={s.buttonGroup}>
          <MainButton
            size='large'
            text={t('editProfileForm.button.update')}
            type='submit'
            disabled={!isValid || !dirty}
            className={s.btn}
          />
          <MainButton
            size='large'
            text={t('editProfileForm.button.cancel')}
            type='button'
            onClick={handleCancel}
            className={`${s.btn} ${!changeProfile ? s.btnCancel : ''}`}
            disabled={changeProfile}
          />
        </div>
      </form>
    </div>
  );
};
