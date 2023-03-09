import { ICONS } from 'ui-kit/icons';

import s from './TeamCard.module.scss';

interface TeamCardProps {
  image?: string;
  name: string;
  position: string;
  social?: {
    behance?: string;
    dribble?: string;
    github?: string;
    linkedin?: string;
  };
}

export const TeamCard = ({
  // треба додати дефолтну картинку
  image,
  name,
  position,
  social = {},
}: TeamCardProps) => {
  const { behance, dribble, github, linkedin } = social;

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img src={image} alt={name} className={s.image} />
      </div>
      <p className={s.name}>{name}</p>
      <p className={s.position}>{position}</p>
      <ul className={s.list}>
        {behance && (
          <li>
            <a href={behance} target='_blank' rel='noopener noreferrer'>
              <ICONS.BEHANCE />
            </a>
          </li>
        )}
        {dribble && (
          <li>
            <a href={dribble} target='_blank' rel='noopener noreferrer'>
              <ICONS.DRIBBLE />
            </a>
          </li>
        )}
        {github && (
          <li>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <ICONS.GITHUB />
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin} target='_blank' rel='noopener noreferrer'>
              <ICONS.LINKEDIN_BLUE />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
