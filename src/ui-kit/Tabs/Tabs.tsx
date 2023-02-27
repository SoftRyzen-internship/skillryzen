import { NavLink } from 'react-router-dom';

import s from './Tabs.module.scss';

interface ITab {
  title: string;
  path: string;
}
interface ITabProps {
  tabs: ITab[];
}

export const Tabs = ({ tabs }: ITabProps) => {
  return (
    <ul className={s.tabs__list}>
      {tabs.map(({ title, path }) => {
        return (
          <li className={s.tabs__item} key={title}>
            <NavLink
              to={path}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? s.tabs__navLinkActive : s.tabs__navLink
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
