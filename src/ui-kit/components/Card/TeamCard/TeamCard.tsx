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

export const TeamCard = ({ image, name, position, social }: TeamCardProps) => {
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img src={image} alt={name} className={s.image} />
      </div>
      <p className={s.name}>{name}</p>
      <p className={s.position}>{position}</p>
      <ul className={s.list}>
        {social.behance && (
          <li>
            <a href={social.behance} target='_blank' rel='noreferrer'>
              <ICONS.BEHANCE />
            </a>
          </li>
        )}
        {social.dribble && (
          <li>
            <a href={social.dribble} target='_blank' rel='noreferrer'>
              <ICONS.DRIBBLE />
            </a>
          </li>
        )}
        {social.github && (
          <li>
            <a href={social.github} target='_blank' rel='noreferrer'>
              <ICONS.GITHUB />
            </a>
          </li>
        )}
        {social.linkedin && (
          <li>
            <a href={social.linkedin} target='_blank' rel='noreferrer'>
              <ICONS.LINKEDIN_BLUE />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
