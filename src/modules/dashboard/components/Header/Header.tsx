import React from 'react'
import { Logo } from '@ui-kit'

import s from './Header.module.scss'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={s.header}>
      <Logo content="sjdkfh" />
      <h1>{title}</h1>
    </header>
  )
}
