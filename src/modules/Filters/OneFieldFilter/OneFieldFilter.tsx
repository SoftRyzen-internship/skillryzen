import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { Checkbox } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';

import s from './OneFieldFilter.module.scss';

interface OneFieldFilterProps {
  data: string[];
  name: string;
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

export const OneFieldFilter = ({
  data,
  name,
  setFilter,
}: OneFieldFilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const filterRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const handleMouseDown = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setFilter(prev => [...prev, e.target.value])
      : setFilter(prev => prev.filter(item => item !== e.target.value));
  };

  return (
    <div className={s.filter} ref={filterRef}>
      <button
        className={`${s.filter__button} ${
          isOpen && s['filter__button--active']
        } ${s[`filter__button--${theme}`]}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <ICONS.FILTER_TWO className={s.filter__icon} />
        {windowWidth > 767 && <span>{t('testsMain.filter')}</span>}
      </button>
      <ul
        className={`${s.filter__list} ${!isOpen && s['filter__list--hidden']} ${
          s[`filter__list--${theme}`]
        }`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className={`${s.filter__item} ${s[`filter__item--${theme}`]}`}
          >
            <Checkbox
              name={`filter${name}`}
              value={item}
              label={item}
              type='filter'
              onChange={handleChange}
              labelClassName={`${s[`filter__checkbox--${theme}`]}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
