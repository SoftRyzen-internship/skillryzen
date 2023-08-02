import s from './UserAvatar.module.scss';
import { Theme } from 'constants/types';
import { ICONS } from 'ui-kit/icons';
interface UserAvatarProps {
  userAvatarUrl: string;
  changeIcon?: JSX.Element;
  theme?: Theme;
  className?: string;
  onClick?: () => void;
}
export const UserAvatar = ({
  userAvatarUrl,
  onClick,
  className,
}: UserAvatarProps) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <div className={s.imgThumb}>
        <img
          className={s.avatar}
          src={userAvatarUrl}
          width={200}
          height={200}
          alt='avatar'
        />
      </div>
      <button type='button' className={s.iconWrapper} onClick={onClick}>
        <ICONS.EDIT className={s.iconEdit} />
      </button>
    </div>
  );
};
