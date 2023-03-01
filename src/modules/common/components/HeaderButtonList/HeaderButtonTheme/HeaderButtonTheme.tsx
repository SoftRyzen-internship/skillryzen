import { useState } from 'react';

import { COLORS } from 'theme/colors.const';
import { ICONS } from 'theme/icons.const';
import { HeaderButton } from 'ui-kit/index';

export const HeaderButtonTheme = () => {
  const SunIcon = <ICONS.SUN stroke={COLORS.sunIcon} />;
  const MoonIcon = <ICONS.MOON stroke={COLORS.moonIcon} />;

  const [theme, setTheme] = useState('dark');
  const [popup, setPopup] = useState<null | React.ReactNode>(null);

  const [icon, setIcon] = useState<JSX.Element>(() => {
    if (theme === 'dark') {
      return MoonIcon;
    } else {
      return SunIcon;
    }
  });

  const mouseEnterHandler = () => {
    setPopup(<div>{`${theme} theme`}</div>);
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };

  const clickHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
      setIcon(MoonIcon);
    } else {
      setTheme('light');
      setIcon(SunIcon);
    }
  };
  return (
    <HeaderButton
      icon={icon}
      onClick={clickHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  );
};
