import { HeaderInput } from '../../../common/components/HeaderInput';
import { HeaderButtonList } from '../../../common/components/HeaderButtonList';
import { HeaderUserAvatarCard } from '../../../common/components/HeaderUserAvatarCard';
import { Logo } from '../../../../ui-kit/index';
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
