import { useTranslation } from 'react-i18next';

import { IMAGES } from 'ui-kit/images';

import { useThemeContext } from 'context/themeContext';

import { MyProfile } from './MyProfile';
import { MyTests } from './MyTests';
import { MyAchievementsList } from './MyAchievementsList';

import { IThemeContext, UserInfo } from 'constans/types';

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
    avatarUrl: IMAGES.BLUE_AVATAR,
    company: {
      name: 'GoIT',
      avatarUrl: IMAGES.GOIT_AVATAR,
    },

    groupName: 'JS48',
    testsAmount: 3,
    social: [
      {
        name: 'telegram',
        url: 'https://web.telegram.org/',
      },

      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/',
      },
      {
        name: 'github',
        url: 'https://github.com/',
      },
      {
        name: 'discord',
        url: 'https://discord.com/',
      },
      // {
      //   name: 'behance',
      //   url: 'https://www.behance.net/',
      // },
      // {
      //   name: 'dribble',
      //   url: 'https://dribbble.com/',
      // },
    ],
    achievements: {
      score: '98%',
      coins: 25,
      time: '01:15:36',
    },
    tests: [
      // {
      //   id: 1,
      //   title: 'FullStuck_Final_Test',
      //   text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      //   fields: ['HTML', 'CSS', 'React', 'Javascript'],
      //   author: 'GoIt',
      //   number: 50,
      //   time: 3,
      // },
      // {
      //   id: 2,
      //   title: 'FullStuck_Final_Test',
      //   text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      //   fields: ['HTML', 'CSS', 'React', 'Javascript'],
      //   author: 'GoIt',
      //   number: 50,
      //   time: 3,
      // },
      // {
      //   id: 3,
      //   title: 'FullStuck_Final_Test',
      //   text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      //   fields: ['HTML', 'CSS', 'React', 'Javascript'],
      //   author: 'GoIt',
      //   number: 50,
      //   time: 3,
      // },
      // {
      //   id: 4,
      //   title: 'FullStuck_Final_Test',
      //   text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      //   fields: ['HTML', 'CSS', 'React', 'Javascript'],
      //   author: 'GoIt',
      //   number: 50,
      //   time: 3,
      // },
    ],
  };

  return (
    <div className={`${s.profilePage} ${s[`profilePage--${theme}`]}`}>
      <MyProfile userInfo={USER_INFO} theme={theme} />
      <MyAchievementsList userInfo={USER_INFO} theme={theme} />
      <MyTests userInfo={USER_INFO} theme={theme} />
    </div>
  );
};
