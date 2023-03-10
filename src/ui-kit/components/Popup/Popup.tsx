import { useTranslation } from 'react-i18next';
import { Theme } from 'constans/types';
import s from './Popup.module.scss';
import { Link } from 'react-router-dom';

type TItem = {
  icon?: JSX.Element;
  text?: string;
  path?: string;
};

interface IProps {
  list: TItem[];
  vievAll?: string;
  handleClickItem?: (text: string) => void;
  handleClickLink?: () => void;
  theme?: Theme;
}

export const Popup = ({
  list,
  vievAll,
  handleClickItem,
  handleClickLink,
  theme = 'dark',
}: IProps) => {
  const { t } = useTranslation();
  return (
    <div className={`${s[`popupWrapper--${theme}`]}`}>
      <button
        className={vievAll ? s.vievAllVisible : s.vievAllHidden}
        type='button'
        onClick={handleClickLink ? () => handleClickLink() : null}
      >
        {vievAll}
      </button>
      <ul>
        {list.map(({ icon, text, path }, idx) => (
          <li
            key={idx}
            onClick={handleClickItem ? () => handleClickItem(text) : null}
            className={`${s[`item--${theme}`]}`}
          >
            <Link to={path} className={s.link}>
              <div>{icon}</div>
              <p className={`${s[`text--${theme}`]}`}>{text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
