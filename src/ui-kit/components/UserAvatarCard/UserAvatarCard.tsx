import { memo } from 'react';

import { Theme } from 'constans/types';

import s from './UserAvatarCard.module.scss';
interface UserAvatarCardProps {
  userName: string;
  userAvatarUrl: string;
  userRole?: string;
  userStatus?: 'green' | 'yellow' | 'gray';
  theme?: Theme;
}
export const UserAvatarCard = memo(
  ({
    userName,
    userRole,
    userAvatarUrl,
    userStatus,
    theme = 'dark',
  }: UserAvatarCardProps) => {
    return (
      <div className={s.card}>
        <div className={s.imgThumb}>
          <img
            className={s.avatar}
            src={userAvatarUrl}
            width={40}
            height={40}
            alt='user-avatar'
          />
          {userStatus && (
            <span
              className={`${s.status} ${s[`status--${userStatus}-${theme}`]}`}
            ></span>
          )}
        </div>
        {userName && (
          <div className={s.info}>
            <p className={`${s.name} ${s[`name--${theme}`]}`}>{userName}</p>
            {userRole && (
              <p className={`${s.role} ${s[`role--${theme}`]}`}>{userRole}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

UserAvatarCard.displayName = 'UserAvatarCard';
