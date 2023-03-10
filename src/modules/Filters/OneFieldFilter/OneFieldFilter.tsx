import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { Checkbox } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';

import s from './OneFieldFilter.module.scss';

interface OneFieldFilterProps {
  data: string[];
  setPositions: React.Dispatch<React.SetStateAction<string[]>>;
}

export const OneFieldFilter = ({ data, setPositions }: OneFieldFilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const filterRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
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
      ? setPositions((prev) => [...prev, e.target.id])
      : setPositions((prev) => prev.filter((item) => item !== e.target.id));
  };

  return (
    <div className={s.filter} ref={filterRef}>
      <button
        className={`${s.filter__button} ${
          isOpen && s['filter__button--active']
        } ${s[`filter__button--${theme}`]}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ICONS.FILTER_TWO className={s.filter__icon} />
        <span>{t('testsMain.filter')}</span>
      </button>
      {isOpen && (
        <ul className={s.filter__list}>
          {data.map((item, index) => (
            <li key={index}>
              <Checkbox
                name='filterPosition'
                id={item}
                label={item}
                type='filter'
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
