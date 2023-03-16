import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton } from 'ui-kit/index';
import { IThemeContext } from 'constans/types';

export const HeaderButtonTheme = () => {
  const SunIcon = <ICONS.SUN stroke={'var(--accent-cl)'} />;
  const MoonIcon = <ICONS.MOON stroke={'var(--accent-cl)'} />;

  const { theme, setTheme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

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
      localStorage.setItem('theme', '"dark"');
      setIcon(MoonIcon);
    } else {
      setTheme('light');
      localStorage.setItem('theme', '"light"');
      setIcon(SunIcon);
    }
  };
  return (
    <HeaderButton
      icon={icon}
      onClick={clickHandler}
      theme={theme}
      title={
        theme === 'dark' ? t('header.theme.dark') : t('header.theme.light')
      }
    />
  );
};
