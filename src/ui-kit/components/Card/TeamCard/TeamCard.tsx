import { Theme, UserSocial } from 'constans/types';
import { SocialList } from 'ui-kit/components/SocialList';
import { positionsData } from 'utils/team';

import s from './TeamCard.module.scss';


interface TeamCardProps {
  image?: string;
  name: string;
  position: string;
  social?: UserSocial[];
  theme?: Theme;
}

const lineColors = {
  [positionsData.OWNER]: "blue",
  [positionsData.FRONT_END]: "yellow",
  [positionsData.BACK_END]: "green",
  [positionsData.DESIGNER]: "red",
  [positionsData.QA]: "lightBlue"
}

export const TeamCard = ({
  // треба додати дефолтну картинку
  image,
  name,
  position,
  social,
  theme="dark"
}: TeamCardProps) => {
  return (
    <div className={`${s.card} ${s[`card--${theme}`]} ${s[`card--${lineColors[position]}`]}}`}>
      <div className={s.imageWrapper}>
        <img src={image} alt={name} className={s.image} />
      </div>
      <p className={`${s.name} ${s[`name--${theme}`]}`}>{name}</p>
      <p className={s.position}>{position}</p>
      <SocialList social={social} theme={theme}/>
    </div>
  );
};
