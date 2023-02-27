import React from 'react';
import { HeaderButtonList } from '../../../common/components/HeaderButtonList';
import { HeaderUserAvatarCard } from '../../../common/components/HeaderUserAvatarCard';
import { Logo } from '../../../../ui-kit/index';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo content='SkillRyzen' />
      <HeaderButtonList />
      <HeaderUserAvatarCard />
    </header>
  );
};
