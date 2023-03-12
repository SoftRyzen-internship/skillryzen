import { Theme, UserSocial } from 'constans/types';
import { ICONS } from 'ui-kit/icons';

import s from './SocialList.module.scss';

interface SocialListProps {
  social: UserSocial[];
  className?: string;
  theme?: Theme;
}
export const SocialList = ({
  social,
  className = '',
  theme = 'dark',
}: SocialListProps) => {

  const objectIcons = {
    telegram: <ICONS.TELEGRAM className={`${s[`icon--${theme}`]}`} />,
    linkedin: <ICONS.LINKEDIN className={`${s[`icon--${theme}`]}`} />,
    discord: <ICONS.DISCORD className={`${s[`icon--${theme}`]}`} />,
    github: <ICONS.GITHUB className={`${s[`icon--${theme}`]}`} />,
    behance: <ICONS.BEHANCE className={`${s[`icon--${theme}`]}`} />,
    dribble: <ICONS.DRIBBLE className={`${s[`icon--${theme}`]}`} />,
  };
  return (
    <ul className={`${s.list} ${className}`}>
      {social.map((item, index) => {
        return (
          <li className={s.item} key={index}>
            <a
              className={`${s[`link--${theme}`]}`}
              href={item.url}
              target='_blank'
              rel='noreferrer noopener'
            >
              {objectIcons[item.name]}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
