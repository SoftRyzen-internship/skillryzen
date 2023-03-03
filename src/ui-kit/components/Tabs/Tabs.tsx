import { Theme } from 'modules/common/types';
import { NavLink } from 'react-router-dom';

import s from './Tabs.module.scss';

interface Tab {
  title: string;
  path: string;
}
interface TabProps {
  tabs: Tab[];
  theme?: Theme;
}

export const Tabs = ({ tabs, theme = 'dark' }: TabProps) => {
  return (
    <ul className={s.tabs__list}>
      {tabs.map(({ title, path }) => {
        return (
          <li className={s.tabs__item} key={title}>
            <NavLink
              to={path}
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? `${s.tabs__navLinkActive} ${
                      s[`tabs__navLinkActive--${theme}`]
                    }`
                  : `${s.tabs__navLink} ${s[`tabs__navLink--${theme}`]}`
              }
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
