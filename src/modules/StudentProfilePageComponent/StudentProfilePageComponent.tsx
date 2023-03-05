import { useTranslation } from 'react-i18next';

import { IMAGES } from 'ui-kit/images';
import { ICONS } from 'ui-kit/icons';

import { useThemeContext } from 'context/themeContext';

import { MyProfile } from './MyProfile';
import { MyInfo } from './MyInfo';
import { MyTests } from './MyTests';
import { MyAchievementsList } from './MyAchievementsList';

import { IThemeContext, UserInfo } from 'modules/common/types';

import s from './StudentProfilePageComponent.module.scss';

export const StudentProfilePageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const USER_INFO: UserInfo = {
    name: 'Maksim Kozlov',
    email: 'test@test.com',
    phone: '+380501234567',
    location: 'Ukraine',
    role: t('userProfile.userRole.student'),
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
    achievements: {
      score: '98%',
      coins: 25,
      time: '01:15:36',
    },
    avatarUrl: IMAGES.JAVA_SCRIPT,
    companyName: 'SoftRyzen',
    groupName: 'JS48',
    testsAmount: 3,
  };

  return (
    <div className={`${s.profilePage} ${s[`profilePage--${theme}`]}`}>
      <MyProfile userInfo={USER_INFO} theme={theme} />
      <MyInfo userInfo={USER_INFO} theme={theme} />
      <MyTests userInfo={USER_INFO} theme={theme} />
      <MyAchievementsList userInfo={USER_INFO} theme={theme} />
    </div>
  );
};
