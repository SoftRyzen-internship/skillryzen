import { useState } from 'react';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';

import s from './Select.module.scss';

interface SelectItem {
  id: string;
  icon: JSX.Element;
  selectItem: string;
}

interface SelectProps {
  title: string;
  selectList: SelectItem[];
  onClickItem?: (item: string) => void;
}

export const Select = ({ title, selectList, onClickItem }: SelectProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme }: IThemeContext = useThemeContext();

  const handleToogleMenu = () => setOpenMenu(prev => !prev);

  const handleClickItem = (select: string) => {
    onClickItem(select);
    handleToogleMenu();
  };

  return (
    <div className={s.container}>
      <div
        className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}
        onClick={handleToogleMenu}
      >
        {title}
        {openMenu ? (
          <ICONS.CHEVRON_UP className={s.icon} />
        ) : (
          <ICONS.CHEVRON_DOWN className={s.icon} />
        )}
      </div>
      {openMenu && (
        <ul className={`${s.selectWrapper} ${s[`selectWrapper--${theme}`]}`}>
          {selectList.map(({ id, icon, selectItem }) => (
            <li
              key={id}
              onClick={() => handleClickItem(selectItem)}
              className={`${s.item} ${s[`item--${theme}`]}`}
            >
              {icon}
              <p className={`${s.text} ${s[`text--${theme}`]}`}>{selectItem}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
