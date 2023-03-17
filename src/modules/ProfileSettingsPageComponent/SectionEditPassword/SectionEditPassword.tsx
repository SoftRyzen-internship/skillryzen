import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EditPasswordForm } from 'modules/Forms';
import { UserAvatar } from 'ui-kit/components/UserAvatar';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import s from './SectionEditPassword.module.scss';
import { randomAvatar } from 'utils/randomAvatar';
export const SectionEditPassword = () => {
  const [userAvatarUrl, setUserAvatarUrl] = useState(randomAvatar());

  const [userAvatarUrlOld] = useState(userAvatarUrl);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAvatarFile = event.target.files?.[0];

    if (selectedAvatarFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedAvatarFile);
      reader.onload = () => {
        const base64 = reader.result as string;
        setUserAvatarUrl(base64);
        if (!selectedFile || selectedFile.name !== selectedAvatarFile.name) {
          setSelectedFile(selectedAvatarFile);
        }
      };
    }
  };
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  const handleCancelAvatar = (): void => {
    setUserAvatarUrl(userAvatarUrlOld);
    setSelectedFile(null);
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
        key={selectedFile ? selectedFile.name : 'default'}
        style={{ display: 'none' }}
      />
      <EditPasswordForm
        userAvatarUrl={userAvatarUrl}
        userAvatarUrlOld={userAvatarUrlOld}
        onCancel={handleCancelAvatar}
      />
    </div>
  );
};
