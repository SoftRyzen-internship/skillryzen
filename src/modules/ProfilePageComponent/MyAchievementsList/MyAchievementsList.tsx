import { useTranslation } from 'react-i18next';

import { Theme, UserInfo } from 'constans/types';

import s from './MyAchievementsList.module.scss';

interface MyAchievementsListProps {
  theme?: Theme;
}

const userAchievements = {
  score: '98%',
  coins: 25,
  time: '01:15:36',
};

export const MyAchievementsList = ({
  theme = 'dark',
}: MyAchievementsListProps) => {
  const { t } = useTranslation();

  return (
    <ul className={s.container}>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.scoreTitle')}
        </p>
        <p className={s.scoreValue}>{userAchievements.score}</p>
      </li>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.coinsTitle')}
        </p>
        <p className={s.coinsValue}>{userAchievements.coins}</p>
      </li>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.timeTitle')}
        </p>
        <p className={s.timeValue}>{userAchievements.time}</p>
      </li>
    </ul>
  );
};
