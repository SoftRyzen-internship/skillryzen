import { useThemeContext } from 'context/themeContext';
import { HeaderInput } from './HeaderInput';
import { HeaderButtonList } from './HeaderButtonList';
import { HeaderUserAvatarCard } from './HeaderUserAvatarCard';
import { Logo } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';
import s from './MainHeader.module.scss';

export const MainHeader = () => {
  const { theme }: IThemeContext = useThemeContext();
  return (
    <header className={`${s.header} ${s[`header--${theme}`]}`}>
      <Logo content='SkillRyzen' />
      <div className={s.container}>
        <HeaderInput />
        <HeaderButtonList />
        <HeaderUserAvatarCard />
      </div>
    </header>
  );
};
