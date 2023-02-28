import { NavLink } from 'react-router-dom';

import { UseSideBarContext } from '../../context/sideBarContext';

import s from './Menu.module.scss';
import { useState } from 'react';

interface IMenu {
  title: string
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  iconAlt: string
  path: string
  className?: string
}
interface IMenuProps {
  menu: IMenu[];
}

export const Menu = ({ menu }: IMenuProps) => {
  const isOpen = UseSideBarContext()
  return (
      <ul className={s.menu__list}>
      {menu.map((item) => {
        return (
          <li key={item.title} className={s.menu__item}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? s.menu__navLinkActive : s.menu__navLink
              }
            >
              <item.icon aria-label={item.iconAlt} className={item.className || undefined}/>
              {isOpen && <p className={s.menu__title}>{item.title}</p>}
            </NavLink>
          </li>
        )
      })}
      </ul>
  );
};
