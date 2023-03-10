import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { ICONS } from 'ui-kit/icons';
import { Input } from 'ui-kit/index';
import { OneFieldFilter } from 'modules/Filters/OneFieldFilter/OneFieldFilter';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { filterData } from './filterData';

import s from './TeamFilter.module.scss';


interface TeamsearchProps {
  setName: React.Dispatch<React.SetStateAction<string>>
  setPositions: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TeamFilter = ({ setName,  setPositions}: TeamsearchProps) => {
  const [input, setInput] = useState('');
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setName(input);
  };

  return (
    <div className={s.teamFilter}>
      <h2
        className={`${s.teamFilter__title} ${s[`teamSearch__title--${theme}`]}`}
      >
        Our team
      </h2>
      <div className={s.teamFilter__wrapper}>
      <Input
        name='search'
        placeholder={t('testsMain.search')}
        button={true}
        icon={<ICONS.SEARCH fill='#9D9FB5' />}
        theme={theme}
        onChange={handleChange}
        onClick={handleClick}
      />
      <OneFieldFilter data={filterData} setPositions={setPositions}/>
      </div>
    </div>
  );
};
