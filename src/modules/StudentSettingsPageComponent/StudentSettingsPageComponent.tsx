import { SectionEditPassword } from './SectionEditPassword/SectionEditPassword';
import { SectionEditProfile } from './SectionEditProfile/SectionEditProfile';
import s from './StudentSettingsPageComponent.module.scss';

export const StudentSettingsPageComponent = () => {
  return (
    <>
      <div className={s.pageWrapper}>
        <SectionEditPassword />
        <SectionEditProfile />
      </div>
    </>
  );
};
