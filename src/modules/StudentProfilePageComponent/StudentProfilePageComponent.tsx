import { useTranslation } from 'react-i18next';

import { IMAGES } from 'ui-kit/images';
import { useThemeContext } from 'context/themeContext';

import { IThemeContext, UserInfo } from 'modules/common/types';

import { MyProfile } from './MyProfile';
import { MyInfo } from './MyInfo';
import { MyTests } from './MyTests';
import { MyAchievementsList } from './MyAchievementsList';

import s from './StudentProfilePageComponent.module.scss';
import { ICONS } from 'ui-kit/icons';

export const StudentProfilePageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t, i18n } = useTranslation();

  const USER_INFO: UserInfo = {
    name: 'Maksim Kozlov',
    role: 'Student',
    social: [
      {
        url: 'https://web.telegram.org/',
        icon: <ICONS.TELEGRAM />,
      },
      {
        url: 'https://www.linkedin.com/',
        icon: <ICONS.LINKEDIN />,
      },
    ],
    avatarUrl: IMAGES.JAVA_SCRIPT,
    companyName: 'SoftRyzen',
    groupName: 'JS48',
    testsAmount: 3,
  };

  return (
    <div className={`${s.profilePage} ${s[`profilePage--${theme}`]}`}>
      <MyProfile userInfo={USER_INFO} theme={theme} />
      <MyInfo />
      <MyTests />
      <MyAchievementsList />
    </div>
  );
};
