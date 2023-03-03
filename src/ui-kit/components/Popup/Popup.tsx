import { useTranslation } from 'react-i18next';
import { Theme } from 'modules/common/types';
import s from './Popup.module.scss';

type TItem = {
  icon?: JSX.Element;
  text?: string;
};

interface IProps {
  list: TItem[];
  vievAll?: string;
  handleClickItem?: (text: string) => void;
  theme?: Theme;
}

export const Popup = ({
  list,
  vievAll,
  handleClickItem,
  theme = 'dark',
}: IProps) => {
  const { t } = useTranslation();
  return (
    <div className={`${s[`popupWrapper--${theme}`]}`}>
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
            className={`${s[`item--${theme}`]}`}
            onClick={() => handleClickItem(text)}
          >
            <div>{icon}</div>
            <p className={`${s[`text--${theme}`]}`}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
