import { HeaderInput } from 'modules/common/components/HeaderInput';
import { HeaderButtonList } from 'modules/common/components/HeaderButtonList';
import { HeaderUserAvatarCard } from 'modules/common/components/HeaderUserAvatarCard';
import { Logo } from 'ui-kit/index';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo content='SkillRyzen' />
      <div className={s.container}>
        <HeaderInput />
        <HeaderButtonList />
        <HeaderUserAvatarCard />
      </div>
    </header>
  );
};
