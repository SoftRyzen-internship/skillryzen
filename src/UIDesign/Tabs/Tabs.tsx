import { NavLink } from 'react-router-dom'

import s from './Tabs.module.scss'

interface ITab {
  title: string
  id: string
  to: string
}
interface ITabProps {
  tabs: ITab[]
}

export function Tabs({ tabs }: ITabProps) {
  return (
    <ul className={s.tabs__list}>
      {tabs.map(({ title, id, to }) => {
        return (
          <li className={s.tabs__item} key={id}>
            <NavLink
              to={to}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? s.tabs__navLinkActive : s.tabs__navLink
              }
            >
              {title}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
