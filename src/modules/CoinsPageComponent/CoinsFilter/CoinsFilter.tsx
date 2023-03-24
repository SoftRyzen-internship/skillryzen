import { useState, useRef } from 'react';

import { ViewButtonList } from 'modules/common/ViewButtonList/ViewButtonList';

import { useOutsideClick } from 'hooks';
import { useThemeContext } from 'context/themeContext';

import { Accordion, Filter } from 'ui-kit';

import { filterData } from './filterData';

import s from './CoinsFilter.module.scss';

interface Props {
  size: 'large' | 'small';
  setSize: React.Dispatch<React.SetStateAction<'large' | 'small'>>;
}

export const CoinsFilter = ({ size, setSize }: Props) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const { theme } = useThemeContext();

  useOutsideClick(filterRef, setShowFilter);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={s.wrapper}>
      <ViewButtonList size={size} setSize={setSize} />
      <Filter
        ref={filterRef}
        handleFilter={handleFilter}
        showFilter={showFilter}
        theme={theme}
      >
        {showFilter && <Accordion data={filterData} isIcon isList isMargin />}
      </Filter>
    </div>
  );
};
