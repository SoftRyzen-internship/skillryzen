import React from 'react'
import { IMGS } from '@theme/icons.const'
import { Logo } from '@ui-kit'
import { UserAvatarCard } from '@ui-kit'

import s from './Header.module.scss'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={s.header}>
      <h1>{title}</h1>
      <Logo content="sjdkfh" />
      <UserAvatarCard
        userName="John Doe"
        userRole="Admin"
        userAvatarUrl={IMGS.JAVA_SCRIPT}
        userStatus="green"
      ></UserAvatarCard>
    </header>
  )
}
