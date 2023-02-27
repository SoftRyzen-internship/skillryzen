import React from 'react';
import { HeaderButtonList } from '@modules/common/components/HeaderButtonList';
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
      <HeaderButtonList />
      <HeaderUserAvatarCard />
    </header>
  );
};
