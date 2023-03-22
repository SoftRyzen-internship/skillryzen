import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { ICONS } from 'ui-kit/icons';
import { IconButton } from 'ui-kit/index';
import { Accordion } from 'ui-kit/components/Accordion/Accordion';
import { filterData } from 'modules/TestsPageComponent/TestsFilter/filterData';

import s from './TestsFilter.module.scss';

interface TestFilterProps {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

export const TestsFilter = ({ size, setSize }: TestFilterProps) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [accordionRef]);

  return (
    <div className={s.testsFilter}>
      <div className={s.testsFilter__wrapper}>
        <IconButton
          className={s.itemButton}
          theme={theme}
          onClick={() => setSize('small')}
          color={size === 'small' ? 'blue' : 'black'}
          icon='grid2'
        />
        <IconButton
          className={s.itemButton}
          theme={theme}
          onClick={() => setSize('large')}
          color={size === 'large' ? 'blue' : 'black'}
          icon='grid4'
        />
      </div>
      <div ref={accordionRef}>
        <button
          onClick={handleFilter}
          className={`${s.itemButton} ${s.testsFilter__filter} ${
            s[`testsFilter__filter--${theme}`]
          }`}
        >
          <ICONS.FILTER_TWO className={s.testsFilter__icon} />
          <span>{t('testsMain.filter')}</span>
        </button>
        {showFilter && <Accordion data={filterData} isIcon isList isMargin />}
      </div>
    </div>
  );
};
