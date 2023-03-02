import { NavLink } from 'react-router-dom';
import { UseSideBarContext } from 'modules/Sidebar/context/sideBarContext';
import { Theme } from 'modules/common/types';

import s from './Menu.module.scss';

interface IMenu {
  title: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  iconAlt: string;
  path: string;
  className?: string;
}
interface IMenuProps {
  menu: IMenu[];
  theme?: Theme;
}

export const Menu = ({ menu, theme }: IMenuProps) => {
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
                isActive ? s.menu__navLinkActive : s.menu__navLink
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
