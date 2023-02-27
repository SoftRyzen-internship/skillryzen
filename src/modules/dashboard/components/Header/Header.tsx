import React from 'react';
import { HeaderButtonTheme } from '@modules/common/components/HeaderButtonTheme';
import { HeaderButtonLanguage } from '@modules/common/components/HeaderButtonLanguage';
import { HeaderButtonCoin } from '@modules/common/components/HeaderButtonCoin';
import { HeaderUserAvatarCard } from '@modules/common/components/HeaderUserAvatarCard';
import { Logo } from '@ui-kit/index';
import s from './Header.module.scss';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={s.header}>
      <h1>{title}</h1>
      <Logo content='SkillRyzen' />
      <HeaderButtonTheme />
      <HeaderButtonLanguage />
      <HeaderButtonCoin />
      <HeaderUserAvatarCard />
    </header>
  );
};
