import s from './UserAvatar.module.scss';
import { Theme } from 'modules/common/types';
interface UserAvatarProps {
  userAvatarUrl: string;
  theme?: Theme;
}
export const UserAvatar = ({ userAvatarUrl }: UserAvatarProps) => {
  return (
    <div className={s.avatarWrapper}>
      <div className={s.imgThumb}>
        <img
          className={s.avatar}
          src={userAvatarUrl}
          width={200}
          height={200}
          alt='avatar'
        />
      </div>
    </div>
  );
};
