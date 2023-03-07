import { Theme, UserSocial } from 'modules/common/types';
import { ICONS } from 'ui-kit/icons';

import s from './SocialList.module.scss';

interface SocialListProps {
  social: UserSocial;
  theme?: Theme;
}
export const SocialList = ({ social, theme = 'dark' }: SocialListProps) => {
  return (
    <ul className={s.list}>
      {social.telegram && (
        <li className={s.item} key={social.telegram}>
          <a
            className={s.link}
            href={social.telegram}
            target='_blank'
            rel='noreferrer noopener'
          >
            <ICONS.TELEGRAM className={`${s[`icon--${theme}`]}`} />
          </a>
        </li>
      )}
      {social.linkedin && (
        <li className={s.item} key={social.linkedin}>
          <a
            className={s.link}
            href={social.linkedin}
            target='_blank'
            rel='noreferrer noopener'
          >
            <ICONS.LINKEDIN className={`${s[`icon--${theme}`]}`} />
          </a>
        </li>
      )}
    </ul>
  );
};
