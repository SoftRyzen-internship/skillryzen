import React from 'react'
import { IMGS } from '@theme/icons.const'
import { HeaderButtonTheme } from '@modules/common/components/HeaderButtonTheme'
import { HeaderButtonLanguage } from '@modules/common/components/HeaderButtonLanguage'
import { Logo } from '@ui-kit/index'
import { UserAvatarCard } from '@ui-kit/index'
import s from './Header.module.scss'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={s.header}>
      <h1>{title}</h1>
      <Logo content="SkillRyzen" />
      <UserAvatarCard
        userName="John Doe"
        userRole="Admin"
        userAvatarUrl={IMGS.JAVA_SCRIPT}
        userStatus="green"
      />
      <HeaderButtonTheme />
      <HeaderButtonLanguage />
    </header>
  )
}
