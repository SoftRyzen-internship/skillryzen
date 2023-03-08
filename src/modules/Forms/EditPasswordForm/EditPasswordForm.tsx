import { useState } from 'react';
import { useFormik } from 'formik';
import { ICONS } from 'ui-kit/icons';
import { useTranslation } from 'react-i18next';
import s from './EditPasswordForm.module.scss';
import { useValidationSchema } from './useValidationSchema';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
// import { validationSchema } from './validationSchema';
import { MainButton } from 'ui-kit';

interface FormValues {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  urlAvatar: string;
}
interface Props {
  onCancel: () => void;
  handleChangeAvatar: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userAvatarUrl: string;
}
export const EditPasswordForm: React.FC<Props> = ({
  onCancel,
  handleChangeAvatar,
  userAvatarUrl,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  // const { userAvatarUrl, handleChangeAvatar, onCancel } = props;
  const [urlAvatarOld, seturlAvatarOld] = useState(userAvatarUrl);
  const validationSchema = useValidationSchema();
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const formik = useFormik<FormValues>({
    initialValues: {
      email: 'student511@blabla.com',
      currentPassword: 'secret123',
      newPassword: '',
      confirmPassword: '',
      urlAvatar: userAvatarUrl,
    },

    validationSchema,

    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });
  const {
    values: { email, currentPassword, newPassword, confirmPassword, urlAvatar },
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
    setShowEmail(true);
    onCancel();
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div
          className={`${s.floatingGroup} ${
            touched.email &&
            (errors.email ? s.floatingLabelError : s.floatingLabelValid)
          }`}
        >
          {touched.email && errors.email && (
            <p className={s.errorMsg}>{errors.email}</p>
          )}
          <input
            className={`${s.input} ${
              !showEmail ? s[`inputEdit--${theme}`] : ''
            }`}
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
            autoComplete='email'
            placeholder={t('editPasswordForm.email.address')}
            disabled={showEmail}
          />
          <label className={s.floatingLabel} htmlFor='email'>
            {t('editPasswordForm.email.address')}
          </label>
          <button
            type='button'
            onClick={() => setShowEmail(!showEmail)}
            className={s.showEmailButton}
          >
            <ICONS.EDIT className={s.iconEdit} />
          </button>
        </div>
        <div
          className={`${s.floatingGroup} ${
            touched.currentPassword &&
            (errors.currentPassword
              ? s.floatingLabelError
              : s.floatingLabelValid)
          }`}
        >
          {touched.currentPassword && errors.currentPassword && (
            <p className={s.errorMsg}>{errors.currentPassword}</p>
          )}
          <input
            className={`${s.input} ${
              !showEmail ? s[`inputEdit--${theme}`] : ''
            }`}
            name='currentPassword'
            type={showPassword ? 'text' : 'password'}
            id='currentPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            value={currentPassword}
            autoComplete='off'
            placeholder={t('editPasswordForm.current.password')}
            disabled={showEmail}
          />
          <label className={s.floatingLabel} htmlFor='currentPassword'>
            {t('editPasswordForm.current.password')}
          </label>
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className={s.showPasswordButton}
          >
            {showPassword ? (
              <ICONS.EYE_CLOSED className={s.iconEye} />
            ) : (
              <ICONS.EYE_OPEN className={s.iconEye} />
            )}
          </button>
        </div>
        <div
          className={`${s.floatingGroup} ${
            touched.newPassword &&
            (errors.newPassword ? s.floatingLabelError : s.floatingLabelValid)
          }`}
        >
          {touched.newPassword && errors.newPassword && (
            <p className={s.errorMsg}>{errors.newPassword}</p>
          )}
          <input
            className={`${s.input} ${
              !showEmail ? s[`inputEdit--${theme}`] : ''
            }`}
            name='newPassword'
            type={showPassword ? 'text' : 'password'}
            id='newPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            value={newPassword}
            autoComplete='off'
            placeholder={t('editPasswordForm.new.password')}
            disabled={showEmail}
          />
          <label className={s.floatingLabel} htmlFor='newPassword'>
            {t('editPasswordForm.new.password')}
          </label>
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className={s.showPasswordButton}
          >
            {showPassword ? (
              <ICONS.EYE_CLOSED className={s.iconEye} />
            ) : (
              <ICONS.EYE_OPEN className={s.iconEye} />
            )}
          </button>
        </div>
        <div
          className={`${s.floatingGroup} ${
            touched.confirmPassword &&
            (errors.confirmPassword
              ? s.floatingLabelError
              : s.floatingLabelValid)
          }`}
        >
          {touched.confirmPassword && errors.confirmPassword && (
            <p className={s.errorMsg}>{errors.confirmPassword}</p>
          )}
          <input
            className={`${s.input} ${
              !showEmail ? s[`inputEdit--${theme}`] : ''
            }`}
            name='confirmPassword'
            type={showPassword ? 'text' : 'password'}
            id='confirmPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            value={confirmPassword}
            autoComplete='off'
            placeholder={t('editPasswordForm.confirm.password')}
            disabled={showEmail}
          />
          <label className={s.floatingLabel} htmlFor='confirmPassword'>
            {t('editPasswordForm.confirm.password')}
          </label>
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className={s.showPasswordButton}
          >
            {showPassword ? (
              <ICONS.EYE_CLOSED className={s.iconEye} />
            ) : (
              <ICONS.EYE_OPEN className={s.iconEye} />
            )}
          </button>
        </div>
        <input
          id='avatar-input'
          type='file'
          accept='image/*'
          onChange={handleChangeAvatar}
          style={{ display: 'none' }}
        />
        <div className={s.buttonGroup}>
          <MainButton
            size='large'
            text={t('editPasswordForm.button.save')}
            type='submit'
            disabled={!isValid || !dirty}
            className={s.btn}
          />
          <MainButton
            size='large'
            text={t('editPasswordForm.button.cancel')}
            type='button'
            onClick={handleCancel}
            className={`${s.btn} ${!showEmail ? s.btnCancel : ''}`}
            disabled={showEmail && urlAvatarOld === userAvatarUrl}
          />
        </div>
      </form>
    </div>
  );
};
