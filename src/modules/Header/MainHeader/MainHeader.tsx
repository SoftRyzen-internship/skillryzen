import { useState } from 'react';
import { useThemeContext } from 'context/themeContext';
import { HeaderInput } from './HeaderInput';
import { HeaderButtonList } from './HeaderButtonList';
import { HeaderUserAvatarCard } from './HeaderUserAvatarCard';
import { Logo } from 'ui-kit/index';
import { useCurrentWidth } from 'hooks';
import { MenuIcon } from './MenuIcon';

import { IThemeContext } from 'constants/types';
import s from './MainHeader.module.scss';

export const MainHeader = () => {
  const [showInput, setShowInput] = useState(false);
  const { theme }: IThemeContext = useThemeContext();
  const currentWidth = useCurrentWidth();

  const handleShowInput = () => setShowInput(prev => !prev);

  return (
    <header className={`${s.header} ${s[`header--${theme}`]}`}>
      <div className={s.logoContainer}>
        <MenuIcon />
        <Logo content='SkillRyzen' />
      </div>
      <div className={s.container}>
        {currentWidth > 1279 && <HeaderInput />}
        <HeaderButtonList
          showInput={showInput}
          handleShowInput={handleShowInput}
        />
        <HeaderUserAvatarCard />
      </div>
      {showInput && (
        <div className={`${s.inputContainer} ${s[`inputContainer--${theme}`]}`}>
          <HeaderInput />
        </div>
      )}
    </header>
  );
};
