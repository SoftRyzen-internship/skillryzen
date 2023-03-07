import { useTranslation } from 'react-i18next';
import { EditProfileForm } from 'forms/ProfileSettingsForm/EditProfileForm/EditProfileForm';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'modules/common/types';
import s from './SectionEditProfile.module.scss';

export const SectionEditProfile = () => {
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  return (
    <div
      className={`${s.editProfileWrapper} ${s[`editProfileWrapper--${theme}`]}`}
    >
      <h2 className={s.title}>{t('editProfileForm.edit.profile')}</h2>
      <EditProfileForm />
    </div>
  );
};
