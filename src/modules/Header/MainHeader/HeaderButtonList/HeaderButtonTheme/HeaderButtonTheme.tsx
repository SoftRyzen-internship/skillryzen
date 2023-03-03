import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';
import { IThemeContext } from 'modules/common/types';

export const HeaderButtonTheme = () => {
  const SunIcon = <ICONS.SUN stroke={'var(--accent-cl)'} />;
  const MoonIcon = <ICONS.MOON stroke={'var(--accent-cl)'} />;

  const { theme, setTheme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);

  const [icon, setIcon] = useState<JSX.Element>(() => {
    if (theme === 'dark') {
      return MoonIcon;
    } else {
      return SunIcon;
    }
  });

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        list={[
          {
            icon: theme === 'dark' ? MoonIcon : SunIcon,
            text:
              theme === 'dark'
                ? t('header.theme.dark')
                : t('header.theme.light'),
          },
        ]}
      />
    );
  };

  const mouseLeaveHandler = () => {
    setPopup(null);
  };

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
