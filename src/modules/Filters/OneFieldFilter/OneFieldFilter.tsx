import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Checkbox } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';
import { useCurrentWidth } from 'hooks';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

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
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const filterRef = useRef(null);
  const currentWidth = useCurrentWidth();

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
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
        className={`${s[`filter__button--${theme}`]} ${
          isOpen && s['filter__button--active']
        }`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <ICONS.FILTER_TWO className={s.filter__icon} />
        {currentWidth > 767 && <span>{t('testsMain.filter')}</span>}
      </button>
      <ul
        className={`${s[`filter__list--${theme}`]} ${
          !isOpen && s['filter__list--hidden']
        }`}
      >
        {data.map((item, index) => (
          <li key={index} className={`${s[`filter__item--${theme}`]}`}>
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
