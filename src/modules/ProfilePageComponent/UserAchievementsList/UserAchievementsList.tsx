import { useTranslation } from 'react-i18next';

import { Theme } from 'constans/types';

import s from './UserAchievementsList.module.scss';

interface UserAchievementsListProps {
  theme?: Theme;
}

const USER_ACHIEVEMENTS = {
  score: '0%',
  coins: 0,
  time: '00:00:00',
};

export const UserAchievementsList = ({
  theme = 'dark',
}: UserAchievementsListProps) => {
  const { t } = useTranslation();

  return (
    <ul className={s.container}>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.scoreTitle')}
        </p>
        <p className={s.scoreValue}>{USER_ACHIEVEMENTS.score}</p>
      </li>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.coinsTitle')}
        </p>
        <p className={s.coinsValue}>{USER_ACHIEVEMENTS.coins}</p>
      </li>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.timeTitle')}
        </p>
        <p className={s.timeValue}>{USER_ACHIEVEMENTS.time}</p>
      </li>
    </ul>
  );
};
