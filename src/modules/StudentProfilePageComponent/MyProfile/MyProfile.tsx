import { useTranslation } from 'react-i18next';

import { Theme, UserInfo } from 'modules/common/types';

import { SocialList, UserAvatar } from 'ui-kit/index';
import s from './MyProfile.module.scss';

interface MyProfileProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyProfile = ({ userInfo, theme }: MyProfileProps) => {
  const { t } = useTranslation();
  const { name, role, social, avatarUrl, companyName, groupName, testsAmount } =
    userInfo;
  return (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>{t('userProfile.cardTitle')}</p>
      <div className={s.flexWrapper}>
        <UserAvatar userAvatarUrl={avatarUrl} />
        {/* <img
          className={s.avatar}
          src={avatarUrl}
          width={200}
          height={200}
          alt='avatar'
        /> */}
        <div className={s.user}>
          <p className={`${s[`name--${theme}`]}`}>{name}</p>
          <p className={`${s[`role--${theme}`]}`}>{role}</p>
          <SocialList socialList={social} theme={theme} />
        </div>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={`${s[`listTitle--${theme}`]}`}>{companyName}</p>
            <p className={`${s[`label--${theme}`]}`}>
              {t('userProfile.companyLabel')}
            </p>
          </li>
          <li className={s.item}>
            <p className={`${s[`listTitle--${theme}`]}`}>{groupName}</p>
            <p className={`${s[`label--${theme}`]}`}>
              {t('userProfile.groupLabel')}
            </p>
          </li>
          <li className={s.item}>
            <p className={`${s[`listTitle--${theme}`]}`}>{testsAmount}</p>
            <p className={`${s[`label--${theme}`]}`}>
              {t('userProfile.testsLabel')}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
