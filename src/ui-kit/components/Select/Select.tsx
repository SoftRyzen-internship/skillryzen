import { useState } from 'react';

import { Theme } from 'constans/types';
import { ICONS } from 'ui-kit/icons';

import s from './Select.module.scss';

export const Select = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToogleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <div className={s.wrapper} onClick={handleToogleMenu}>
      Final Test Frontend
      {openMenu ? (
        <ICONS.CHEVRON_UP className={s.icon} />
      ) : (
        <ICONS.CHEVRON_DOWN className={s.icon} />
      )}
    </div>
  );
};
