import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import s from './Tabs.module.scss'

export interface IProps {
  props: {
    firstTab: string
    secondTab: string
  }
}

export const Tabs: FC<IProps> = ({ props }) => {
  return (
    <ul className={s.tabs__list}>
      <li className={s.tabs__item}>
        <NavLink to='/' className={({ isActive }:{isActive: boolean}) =>
              isActive ? s.tabs__navLinkActive : s.tabs__navLink
            }>
        {props.firstTab}
        </NavLink>
      </li>
      <li className={s.tabs__item}>
        <NavLink to='' className={({ isActive }:{isActive: boolean}) =>
              isActive ? s.tabs__navLinkActive : s.tabs__navLink
            }>
        {props.secondTab}
        </NavLink>
      </li>
    </ul>
  )
}
