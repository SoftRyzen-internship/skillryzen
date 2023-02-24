import { NavLink } from 'react-router-dom'

import s from './Menu.module.scss'

interface IMenu {
  title: string
  icon: string
  iconWidth: string
  iconHeight: string
  iconAlt: string
  path: string
}
interface IMenuProps {
  menu: IMenu[]
}

export const Menu = ({ menu }: IMenuProps) => {
  return (
    <nav className={s.menu__list}>
      <ul>
      {menu.map((item) => {
        return (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? s.menu__navLinkActive : s.menu__navLink
              }
            >
              <img
                src={item.icon}
                alt={item.iconAlt}
                width={item.iconWidth}
                height={item.iconHeight}
              />
              <p className={s.menu__title}>{item.title}</p>
            </NavLink>
          </li>
        )
      })}
      </ul>
    </nav>
  )
}
