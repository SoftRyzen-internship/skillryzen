import { useState } from 'react';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';

import s from './Select.module.scss';

export const Select = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme }: IThemeContext = useThemeContext();

  const handleToogleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`} onClick={handleToogleMenu}>
      Final Test Frontend
      {openMenu ? (
        <ICONS.CHEVRON_UP className={s.icon} />
      ) : (
        <ICONS.CHEVRON_DOWN className={s.icon} />
      )}
    </div>
  );
};
