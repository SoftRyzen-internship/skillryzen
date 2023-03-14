import { NavLink } from 'react-router-dom';
import { UseSideBarContext } from 'modules/Sidebar/context/sideBarContext';
import { Theme } from 'constans/types';

import s from './Menu.module.scss';

interface Menu {
  title: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  iconAlt: string;
  path: string;
  className?: string;
}
interface MenuProps {
  menu: Menu[];
  theme?: Theme;
}

export const Menu = ({ menu, theme = 'dark' }: MenuProps) => {
  const isOpen = UseSideBarContext();

  return (
    <ul className={s.menu__list}>
      {menu.map((item) => {
        return (
          <li
            key={item.title}
            className={isOpen ? s.menu__itemOpen : s.menu__itemClose}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${s.menu__navLink} ${
                  isActive ? s.menu__navLinkActive : s.menu__navLink
                } ${theme === 'dark' ? s.menu__navLink : s.menu__navLinkLight}`
              }
            >
              <item.icon
                aria-label={item.iconAlt}
                className={
                  theme === 'dark' ? s.menu__iconDark : s.menu__iconLight
                }
              />
              {isOpen && <p className={s.menu__title}>{item.title}</p>}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
