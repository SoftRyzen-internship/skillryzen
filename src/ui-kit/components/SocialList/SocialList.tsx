import { SocialItem, Theme } from 'modules/common/types';

import s from './SocialList.module.scss';

interface SocialListProps {
  socialList: SocialItem[];
  theme?: Theme;
}
export const SocialList = ({ socialList, theme = 'dark' }: SocialListProps) => {
  return (
    <ul className={s.list}>
      {socialList.map((socialItem) => {
        return (
          <li className={s.item} key={socialItem.url}>
            <a className={s.link} href={socialItem.url}>
              <div className={`${s[`icon--${theme}`]}`}>{socialItem.icon}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
