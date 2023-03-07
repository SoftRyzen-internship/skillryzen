import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EditPasswordForm } from 'forms/ProfileSettingsForm/EditPasswordForm/EditPasswordForm';
import { UserAvatar } from 'ui-kit/components/UserAvatar';
import { IMAGES } from 'ui-kit/images';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'modules/common/types';
import s from './SectionEditPassword.module.scss';
export const SectionEditPassword = () => {
  const [userAvatarUrl, setUserAvatarUrl] = useState(IMAGES.JAVA_SCRIPT);

  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setUserAvatarUrl(objectUrl);
    }
  };
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const handleCancelAvatar = (): void => {
    setUserAvatarUrl(IMAGES.JAVA_SCRIPT);
  };
  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <h2 className={s.title}>{t('editPasswordForm.edit.password')}</h2>
      <UserAvatar
        userAvatarUrl={userAvatarUrl}
        className={s.userAvatar}
        onClick={() => document.getElementById('avatar-input')?.click()}
      />
      <input
        id='avatar-input'
        type='file'
        accept='image/*'
        onChange={handleChangeAvatar}
        style={{ display: 'none' }}
      />
      <EditPasswordForm
        userAvatarUrl={userAvatarUrl}
        handleChangeAvatar={handleChangeAvatar}
        onCancel={handleCancelAvatar}
      />
    </div>
  );
};
