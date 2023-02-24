import { NavLink } from 'react-router-dom'

import s from './Menu.module.scss'

interface IMenu {
  title: string
  id: string
  icon: string
  to: string
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
          <li key={item.id}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? s.menu__navLinkActive : s.menu__navLink
              }
            >
              <img
                src={item.icon}
                className={s.menu__icon}
                alt="menu-icon"
                width="24px"
                height="24px"
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
