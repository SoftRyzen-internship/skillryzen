import { useTranslation } from 'react-i18next';

import { IMAGES } from 'ui-kit/images';

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
    avatarUrl: IMAGES.JAVA_SCRIPT,
    companyName: 'SoftRyzen',
    groupName: 'JS48',
    testsAmount: 3,
    social: {
      telegram: 'https://web.telegram.org/',
      linkedin: 'https://www.linkedin.com/',
    },
    achievements: {
      score: '98%',
      coins: 25,
      time: '01:15:36',
    },
    tests: [
      {
        title: 'FullStuck_Final_Test',
        text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
        fields: ['HTML', 'CSS', 'React', 'Javascript'],
        number: 50,
        time: 3,
      },
      {
        title: 'FullStuck_Final_Test',
        text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
        fields: ['HTML', 'CSS', 'React', 'Javascript'],
        number: 50,
        time: 3,
      },
      {
        title: 'FullStuck_Final_Test',
        text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
        fields: ['HTML', 'CSS', 'React', 'Javascript'],
        number: 50,
        time: 3,
      },
      {
        title: 'FullStuck_Final_Test',
        text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
        fields: ['HTML', 'CSS', 'React', 'Javascript'],
        number: 50,
        time: 3,
      },
    ],
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
