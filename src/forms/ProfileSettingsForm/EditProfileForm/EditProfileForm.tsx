import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { validationSchema } from './validationSchema';

import s from './EditProfileForm.module.scss';
import { useState } from 'react';
import { ICONS } from 'ui-kit/icons';
import { AuthButton } from 'ui-kit';
import { useAppSelector } from 'hooks/hook';
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
  const [company, setCompany] = useState('Lorem');
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      position: '',
      telegram: '',
      linkedin: '',
      role: '',
    },

    validationSchema,
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });

  const {
    values: { name, position, telegram, linkedin, surname, phone, companyName },
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
  const role = useAppSelector((state) => state.auth.role);
  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <ul className={s.inputsList}>
          {role === 'company' && (
            <li
              className={`${s.floatingGroup} ${
                touched.companyName &&
                (errors.companyName
                  ? s.floatingLabelError
                  : s.floatingLabelValid)
              }`}
            >
              {touched.companyName && errors.companyName && (
                <p className={s.errorMsg}>{errors.companyName}</p>
              )}
              <input
                className={s.input}
                name='companyName'
                type='text'
                id='companyName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={companyName}
                autoComplete='company'
                placeholder='Company name'
              />
              <label className={s.floatingLabel} htmlFor='companyName'>
                Company name
              </label>
            </li>
          )}
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
              className={s.input}
              name='name'
              type='text'
              id='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={name}
              autoComplete='name'
              placeholder='Name'
              disabled={changeProfile}
            />
            <label className={s.floatingLabel} htmlFor='name'>
              Name
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
              className={`${s.input} ${
                role === 'admin' ? s.inputEdit : s.inputDisabled
              }`}
              name='position'
              type='text'
              id='position'
              onChange={handleChange}
              onBlur={handleBlur}
              value={role === 'admin' ? 'admin' : 'user'}
              autoComplete='off'
              placeholder='Position'
              disabled={role === 'user'}
            />
            <label className={s.floatingLabel} htmlFor='position'>
              Position
            </label>
            <button
              type='button'
              onClick={() => setChangeProfile(!changeProfile)}
              className={s.changeButton}
            >
              <ICONS.SHIELD_CHECK className={s.iconShield} />
            </button>
          </li>
          <li className={`${s.floatingGroup}`}>
            <input
              className={`${s.input} ${
                role === 'admin' ? s.inputEdit : s.inputDisabled
              }`}
              name='company'
              type='text'
              id='company'
              onChange={handleChange}
              onBlur={handleBlur}
              value={company}
              autoComplete='off'
              placeholder='Company'
              disabled={role === 'user'}
            />
            <label className={s.floatingLabel} htmlFor='company'>
              Company
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
              className={s.input}
              name='surname'
              type='text'
              id='surname'
              onChange={handleChange}
              onBlur={handleBlur}
              value={surname}
              autoComplete='surname'
              placeholder='Surname'
              disabled={changeProfile}
            />
            <label className={s.floatingLabel} htmlFor='surname'>
              Surname
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
              placeholder='Phone'
              disabled={changeProfile}
            />
            <label className={s.floatingLabelPhone} htmlFor='phone'>
              Phone
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
              className={s.input}
              name='telegram'
              type='text'
              id='telegram'
              onChange={handleChange}
              onBlur={handleBlur}
              value={telegram}
              autoComplete='off'
              placeholder='Social media Telegram'
              disabled={changeProfile}
            />
            <label className={s.floatingLabel} htmlFor='telegram'>
              Social media Telegram
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
              className={s.input}
              name='linkedin'
              type='text'
              id='linkedin'
              onChange={handleChange}
              onBlur={handleBlur}
              value={linkedin}
              autoComplete='off'
              placeholder='Social media LinkdIn'
              disabled={changeProfile}
            />
            <label className={s.floatingLabel} htmlFor='linkedin'>
              Social media LinkdIn
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
          <AuthButton
            size='large'
            text='Update'
            type='submit'
            disabled={!isValid || !dirty}
            className={s.btn}
          />
          <AuthButton
            size='large'
            text='Cancel'
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
