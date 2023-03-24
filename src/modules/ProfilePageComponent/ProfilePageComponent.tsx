import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { MyProfile } from './MyProfile';
import { MyTests } from './MyTests';
import { MyAchievementsList } from './MyAchievementsList';

import { IThemeContext } from 'constans/types';

import s from './ProfilePageComponent.module.scss';
import { ScrollContainer } from 'ui-kit';

export const ProfilePageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <ScrollContainer>
      <div className={s.profilePage}>
        <MyProfile theme={theme} />
        <MyAchievementsList theme={theme} />
        <MyTests theme={theme} />
      </div>
    </ScrollContainer>
  );
};
