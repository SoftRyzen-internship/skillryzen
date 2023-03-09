import { useTranslation } from 'react-i18next';

import { Theme, UserInfo } from 'constans/types';

import s from './MyAchievementsList.module.scss';

interface MyAchievementsListProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyAchievementsList = ({
  userInfo,
  theme,
}: MyAchievementsListProps) => {
  const { achievements } = userInfo;
  const { t } = useTranslation();

  return (
    <ul className={s.container}>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.scoreTitle')}
        </p>
        <p className={s.scoreValue}>{achievements.score}</p>
      </li>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.coinsTitle')}
        </p>
        <p className={s.coinsValue}>{achievements.coins}</p>
      </li>
      <li className={`${s[`item--${theme}`]}`}>
        <p className={`${s[`listTitle--${theme}`]}`}>
          {t('userProfile.achievements.timeTitle')}
        </p>
        <p className={s.timeValue}>{achievements.time}</p>
      </li>
    </ul>
  );
};
