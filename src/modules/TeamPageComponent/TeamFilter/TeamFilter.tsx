import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

import { useOutsideClick } from 'hooks';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { positionsData } from 'utils/team';
import { ICONS } from 'ui-kit/icons';
import { Filter, FilterList, Input } from 'ui-kit';

import s from './TeamFilter.module.scss';

interface TeamsearchProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPositions: React.Dispatch<React.SetStateAction<string[]>>;
}

const positionsList = Object.values(positionsData);

export const TeamFilter = ({ setName, setPositions }: TeamsearchProps) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useOutsideClick(filterRef, setShowFilter);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    setInput(inputValue);
    setName(inputValue);
  };

  useEffect(() => {
    if (input) return;
    setName('');
    // eslint-disable-next-line
  }, [input]);

  return (
    <div className={s.teamFilter}>
      <h2
        className={`${s.teamFilter__title} ${s[`teamFilter__title--${theme}`]}`}
      >
        {t('team.title')}
      </h2>
      <div className={s.teamFilter__wrapper}>
        <Input
          name='search'
          value={input}
          placeholder={t('testsMain.search')}
          button={true}
          icon={<ICONS.SEARCH fill='#9D9FB5' />}
          theme={theme}
          onChange={handleChange}
        />
        <Filter
          page='team'
          ref={filterRef}
          handleFilter={handleFilter}
          showFilter={showFilter}
          theme={theme}
        >
          <FilterList
            data={positionsList}
            setFilter={setPositions}
            name='Team'
            theme={theme}
            showFilter={showFilter}
          />
        </Filter>
      </div>
    </div>
  );
};
