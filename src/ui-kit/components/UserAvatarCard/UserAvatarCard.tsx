import s from './UserAvatarCard.module.scss';
import { Theme } from 'constans/types';
interface UserAvatarCardProps {
  userName: string;
  userRole?: string;
  userAvatarUrl: string;
  userStatus?: 'green' | 'yellow' | 'gray';
  theme?: Theme;
}
export const UserAvatarCard = ({
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
          <span className={`${s[`status--${userStatus}-${theme}`]}`}></span>
        )}
      </div>
      <div className={s.info}>
        <p className={`${s[`name--${theme}`]}`}>{userName}</p>
        {userRole && <p className={`${s[`role--${theme}`]}`}>{userRole}</p>}
      </div>
    </div>
  );
};
