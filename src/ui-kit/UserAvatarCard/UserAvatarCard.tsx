import s from './UserAvatarCard.module.scss'

interface HeaderProps {
  userName: string
  userRole: string
  userAvatarUrl: string
  userStatus: 'green' | 'yellow' | 'gray'
}
export const UserAvatarCard: React.FC<HeaderProps> = ({
  userName,
  userRole,
  userAvatarUrl,
  userStatus,
}) => {
  // console.log(`status--${userStatus}`)
  return (
    <div className={s.card}>
      <div className={s.imgThumb}>
        <img
          className={s.avatar}
          src={userAvatarUrl}
          width={40}
          height={40}
          alt="avatar"
        />
        <span className={`${s[`status--${userStatus}`]}`}></span>
      </div>
      <div className={s.info}>
        <p className={s.name}>{userName}</p>
        <p className={s.role}>{userRole}</p>
      </div>
    </div>
  )
}
