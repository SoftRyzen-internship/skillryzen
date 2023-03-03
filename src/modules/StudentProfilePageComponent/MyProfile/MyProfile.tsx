import { ICONS } from 'ui-kit/icons';
import { Theme, UserInfo } from 'modules/common/types';

import s from './MyProfile.module.scss';
import { SocialList } from 'ui-kit/components/SocialList';

interface MyProfileProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyProfile = ({ userInfo, theme }: MyProfileProps) => {
  const { name, role, social, avatarUrl, companyName, groupName, testsAmount } =
    userInfo;
  return (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>My profile</p>
      <div className={s.flexWrapper}>
        <img
          className={s.avatar}
          src={avatarUrl}
          width={200}
          height={200}
          alt='avatar'
        />
        <div className={s.user}>
          <p className={`${s[`name--${theme}`]}`}>{name}</p>
          <p className={`${s[`role--${theme}`]}`}>{role}</p>
          <SocialList socialList={social} theme={theme} />
        </div>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={`${s[`listTitle--${theme}`]}`}>{companyName}</p>
            <p className={`${s[`label--${theme}`]}`}>Company</p>
          </li>
          <li className={s.item}>
            <p className={`${s[`listTitle--${theme}`]}`}>{groupName}</p>
            <p className={`${s[`label--${theme}`]}`}>Group</p>
          </li>
          <li className={s.item}>
            <p className={`${s[`listTitle--${theme}`]}`}>{testsAmount}</p>
            <p className={`${s[`label--${theme}`]}`}>Complited tests</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
