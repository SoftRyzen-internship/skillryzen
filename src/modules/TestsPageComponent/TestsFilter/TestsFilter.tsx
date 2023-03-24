import { useRef, useState } from 'react';

import { IThemeContext } from 'constans/types';
import { useOutsideClick } from 'hooks';
import { useThemeContext } from 'context/themeContext';

import { Accordion, Filter } from 'ui-kit';
import { filterData } from 'modules/TestsPageComponent/TestsFilter/filterData';
import { ViewButtonList } from 'modules/common/ViewButtonList/ViewButtonList';

import s from './TestsFilter.module.scss';

interface TestFilterProps {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

export const TestsFilter = ({ size, setSize }: TestFilterProps) => {
  const { theme }: IThemeContext = useThemeContext();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useOutsideClick(filterRef, setShowFilter);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={s.testsFilter}>
      <ViewButtonList size={size} setSize={setSize} />
      <Filter ref={filterRef} handleFilter={handleFilter} showFilter={showFilter} theme={theme}>
        {showFilter && <Accordion data={filterData} isIcon isList isMargin />}
      </Filter>
    </div>
  );
};
