import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { MyProfile } from './MyProfile';
import { MyTests } from './MyTests';
import { MyAchievementsList } from './MyAchievementsList';

import { IThemeContext } from 'constans/types';

import s from './ProfilePageComponent.module.scss';

export const ProfilePageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className={`${s.profilePage} ${s[`profilePage--${theme}`]}`}>
      <MyProfile theme={theme} />
      <MyAchievementsList theme={theme} />
      <MyTests theme={theme} />
    </div>
  );
};
