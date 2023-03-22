import { useState } from 'react';
import { useThemeContext } from 'context/themeContext';
import { HeaderInput } from './HeaderInput';
import { HeaderButtonList } from './HeaderButtonList';
import { HeaderUserAvatarCard } from './HeaderUserAvatarCard';
import { Logo } from 'ui-kit/index';
import { ICONS } from 'ui-kit/icons';
import { useCurrentWidth } from 'hooks';

import { IThemeContext } from 'constans/types';
import s from './MainHeader.module.scss';

export const MainHeader = () => {
  const [showInput, setShowInput] = useState(false);
  const { theme }: IThemeContext = useThemeContext();
  const currentWidth = useCurrentWidth();

  const handleShowInput = () => setShowInput(prev => !prev);

  return (
    <header className={`${s.header} ${s[`header--${theme}`]}`}>
      <div className={s.logoContainer}>
        <ICONS.BROCKEN_MENU />
        <Logo content='SkillRyzen' />
      </div>
      <div className={s.container}>
        {currentWidth > 1279 &&  <HeaderInput />}
        <HeaderButtonList
          showInput={showInput}
          handleShowInput={handleShowInput}
        />
        <HeaderUserAvatarCard />
      </div>
      {showInput && (
        <div className={s.inputContainer}>
          <HeaderInput />
        </div>
      )}
    </header>
  );
};
