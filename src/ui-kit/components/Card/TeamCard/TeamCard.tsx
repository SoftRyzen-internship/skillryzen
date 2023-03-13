import { positionsData } from 'utils/team';
import { Theme, UserSocial } from 'constans/types';
import { SocialList } from 'ui-kit/components/SocialList';

import s from './TeamCard.module.scss';

interface TeamCardProps {
  image?: string;
  name: string;
  position: string;
  social?: UserSocial[];
  theme?: Theme;
}

const lineColors = {
  [positionsData.OWNER]: 'blue',
  [positionsData.FRONT_END]: 'yellow',
  [positionsData.BACK_END]: 'green',
  [positionsData.DESIGNER]: 'red',
  [positionsData.QA]: 'lightBlue',
};

export const TeamCard = ({
  // треба додати дефолтну картинку
  image,
  name,
  position,
  social,
  theme = 'dark',
}: TeamCardProps) => {
  const cardClasses = `${s.card} 
	${s[`card--${theme}`]} 
	${s[`card--${lineColors[position]}`]}`;
  const nameClasses = `${s.name} 
	${s[`name--${theme}`]}`;

  return (
    <div className={cardClasses}>
      <div className={s.imageWrapper}>
        <img src={image} alt={name} className={s.image} />
      </div>
      <p className={nameClasses}>{name}</p>
      <p className={s.position}>{position}</p>
      <SocialList social={social} theme={theme} />
    </div>
  );
};
