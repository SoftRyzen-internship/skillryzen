import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './Popup.module.scss';

type TItem = {
  icon?: JSX.Element;
  text?: string;
};

interface IProps {
  list: TItem[];
  vievAll?: string;
  handleClickItem?: (text: string) => void;
}

export const Popup = ({ list, vievAll, handleClickItem }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.popupWrapper}>
      <button
        className={vievAll ? s.vievAllVisible : s.vievAllHidden}
        type='button'
      >
        {vievAll}
      </button>
      <ul>
        {list.map(({ icon, text }, idx) => (
          <li
            key={idx}
            className={s.item}
            onClick={() => handleClickItem(text)}
          >
            <div>{icon}</div>
            <p className={s.text}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
