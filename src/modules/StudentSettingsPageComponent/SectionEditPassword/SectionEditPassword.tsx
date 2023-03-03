import { EditPasswordForm } from 'form/ProfileSettingsForm/EditPasswordForm/EditPasswordForm';
import s from './SectionEditPassword.module.scss';

export const SectionEditPassword = () => {
  return (
    <div className={s.editPasswordWrapper}>
      <h2>SectionEditPassword</h2>
      <EditPasswordForm />
    </div>
  );
};
