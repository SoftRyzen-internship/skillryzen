import { EditPasswordForm } from 'forms/ProfileSettingsForm/EditPasswordForm/EditPasswordForm';
import { UserAvatar } from 'ui-kit/components/UserAvatar';
import { IMAGES } from 'ui-kit/images';
import s from './SectionEditPassword.module.scss';

export const SectionEditPassword = () => {
  return (
    <div className={s.editPasswordWrapper}>
      <h2>SectionEditPassword</h2>
      <UserAvatar userAvatarUrl={IMAGES.JAVA_SCRIPT} />
      <EditPasswordForm />
    </div>
  );
};
