import { EditProfileForm } from 'form/ProfileSettingsForm/EditProfileForm/EditProfileForm';
import s from './SectionEditProfile.module.scss';

export const SectionEditProfile = () => {
  return (
    <div className={s.editProfileWrapper}>
      <h2>SectionEditProfile</h2>
      <EditProfileForm />
    </div>
  );
};
