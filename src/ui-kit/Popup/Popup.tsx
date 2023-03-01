import { useState, useEffect } from 'react';
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
  const [isClickViewAll, setIsClickViewAll] = useState(false);
  const [listForRendering, setListForRendering] = useState(list.slice(0, 3));
  const { t } = useTranslation();

  // рендер списку в залежності від того натисли vievAll, чи ні
  useEffect(() => {
    if (isClickViewAll) {
      setListForRendering(list);
    }
    if (!isClickViewAll) {
      setListForRendering(list.slice(0, 3));
    }
  }, [isClickViewAll, list]);

  const handleClickViewAll = () => {
    setIsClickViewAll((prevState) => !prevState);
  };
  return (
    <div className={s.popupWrapper}>
      <button
        className={vievAll ? s.vievAllVisible : s.vievAllHidden}
        type='button'
        onClick={handleClickViewAll}
      >
        {isClickViewAll ? t('header.hideAll') : vievAll}
      </button>
      <ul>
        {listForRendering.map(({ icon, text }, idx) => (
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
