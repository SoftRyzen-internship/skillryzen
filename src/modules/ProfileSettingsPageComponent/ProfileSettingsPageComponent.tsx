import { ScrollContainer } from 'ui-kit';

import { SectionEditPassword } from './SectionEditPassword/SectionEditPassword';
import { SectionEditProfile } from './SectionEditProfile/SectionEditProfile';

import s from './ProfileSettingsPageComponent.module.scss';

export const ProfileSettingsPageComponent = () => {
  return (
    <ScrollContainer>
      <div className={s.pageWrapper}>
        <SectionEditPassword />
        <SectionEditProfile />
      </div>
    </ScrollContainer>
  );
};
