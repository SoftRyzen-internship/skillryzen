import { useTranslation } from 'react-i18next';
import { Theme } from 'constants/types';
import s from './Popup.module.scss';
import { Link } from 'react-router-dom';

type TItem = {
  id: string;
  icon?: JSX.Element;
  text?: string;
  path?: string;
};

interface IProps {
  list: TItem[];
  viewAll?: string;
  handleClickItem?: (text: string) => void;
  handleClickLink?: () => void;
  theme?: Theme;
  adaptive?: boolean;
}

export const Popup = ({
  list,
  viewAll,
  handleClickItem,
  handleClickLink,
  theme = 'dark',
  adaptive = false,
}: IProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${s[`popupWrapper--${theme}`]} ${
        adaptive && s.adaptiveWrapper
      }`}
    >
      <button
        className={viewAll ? s.viewAllVisible : s.viewAllHidden}
        type='button'
        onClick={handleClickLink ? () => handleClickLink() : null}
      >
        {viewAll}
      </button>
      <ul>
        {list.map(({ id, icon, text, path }) => (
          <li
            key={id}
            onClick={handleClickItem ? () => handleClickItem(id) : null}
            className={`${s[`item--${theme}`]}`}
          >
            <Link to={path} className={s.link}>
              <div>{icon}</div>
              <p
                className={`${s[`text--${theme}`]} ${
                  adaptive && s.adaptiveText
                }`}
              >
                {text}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
