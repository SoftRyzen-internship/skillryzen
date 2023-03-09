import { UserSocial } from 'constans/types';

import s from './TeamCard.module.scss';
import { SocialList } from 'ui-kit/components/SocialList';

interface TeamCardProps {
  image?: string;
  name: string;
  position: string;
  social?: UserSocial[];
}

export const TeamCard = ({
  // треба додати дефолтну картинку
  image,
  name,
  position,
  social,
}: TeamCardProps) => {
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img src={image} alt={name} className={s.image} />
      </div>
      <p className={s.name}>{name}</p>
      <p className={s.position}>{position}</p>
      <SocialList social={social} />
    </div>
  );
};
