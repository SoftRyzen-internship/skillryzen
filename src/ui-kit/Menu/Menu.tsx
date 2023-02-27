import { NavLink } from 'react-router-dom';

import s from './Menu.module.scss';

interface IMenu {
  title: string
  icon: string
  iconAlt: string
  path: string
}
interface IMenuProps {
  menu: IMenu[]
  isOpen?: boolean
}

export const Menu = ({ menu, isOpen }: IMenuProps) => {
  return (
    <nav className={s.menu__list}>
      <ul>
      {menu.map((item) => {
        return (
          <li key={item.title} className={s.menu__item}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? s.menu__navLinkActive : s.menu__navLink
              }
            >
              <img
                src={item.icon}
                alt={item.iconAlt}
                width='24'
                height='24'
              />
              {isOpen && <p className={s.menu__title}>{item.title}</p>}
            </NavLink>
          </li>
        )
      })}
      </ul>
    </nav>
  );
};
