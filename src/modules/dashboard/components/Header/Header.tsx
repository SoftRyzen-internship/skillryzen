import { useThemeContext } from 'context/themeContext';
import { HeaderInput } from 'modules/common/components/HeaderInput';
import { HeaderButtonList } from 'modules/common/components/HeaderButtonList';
import { HeaderUserAvatarCard } from 'modules/common/components/HeaderUserAvatarCard';
import { Logo } from 'ui-kit/index';

import { IThemeContext } from 'modules/common/types';
import s from './Header.module.scss';

export const Header = () => {
  const { theme }: IThemeContext = useThemeContext();
  return (
    <header className={`${s[`header--${theme}`]}`}>
      <Logo content='SkillRyzen' />
      <div className={s.container}>
        <HeaderInput />
        <HeaderButtonList />
        <HeaderUserAvatarCard />
      </div>
    </header>
  );
};
