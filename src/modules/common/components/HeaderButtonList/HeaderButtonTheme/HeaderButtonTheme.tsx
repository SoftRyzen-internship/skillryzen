import { useState } from 'react';
import { Sun, Moon } from '@theme/icons.const';
import { HeaderButton } from '@ui-kit/index';

export const HeaderButtonTheme = () => {
  const SunIcon = <Sun color='#FFD84F' size='24px' />;
  const MoonIcon = <Moon color='#3653F2' size='24px' />;

  const [theme, setTheme] = useState('dark');

  const [icon, setIcon] = useState<JSX.Element>(() => {
    if (theme === 'dark') {
      return MoonIcon;
    } else {
      return SunIcon;
    }
  });

  const clickHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
      setIcon(MoonIcon);
    } else {
      setTheme('light');
      setIcon(SunIcon);
    }
  };
  return <HeaderButton icon={icon} onClick={clickHandler} />;
};
