import { useState } from 'react';

import { IThemeContext } from 'constants/types';
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

  const handleToggleMenu = () => setOpenMenu(prev => !prev);

  const handleClickItem = (select: string) => {
    onClickItem(select);
    handleToggleMenu();
  };

  return (
    <div className={s.container}>
      <div
        className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}
        onClick={handleToggleMenu}
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

// ---Using in component----

// import { ICONS } from 'ui-kit/icons';

// const [item, setItem] = useState('Time for answer');

// const onClickItem = (item: string) => {
//   setItem(item);
// };

// <Select
//   title={item}
//   selectList={[
//     {
//       id: '1',
//       icon: <ICONS.CIRCLE width={20} height={20} />,
//       selectItem: '1 minute',
//     },
//     {
//       id: '2',
//       icon: <ICONS.CIRCLE width={20} height={20} />,
//       selectItem: '2 minutes',
//     },
//     {
//       id: '3',
//       icon: <ICONS.CIRCLE width={20} height={20} />,
//       selectItem: '3 minutes',
//     },
//   ]}
//   onClickItem={onClickItem}
// />;
