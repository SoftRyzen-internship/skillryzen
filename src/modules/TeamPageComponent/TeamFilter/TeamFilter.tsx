import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { ICONS } from 'ui-kit/icons';
import { Input } from 'ui-kit/index';
import { OneFieldFilter } from 'modules/Filters/OneFieldFilter/OneFieldFilter';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { positionsData } from 'utils/team';

import s from './TeamFilter.module.scss';


interface TeamsearchProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPositions: React.Dispatch<React.SetStateAction<string[]>>;
}

const positionsList = Object.values(positionsData);

export const TeamFilter = ({ setName, setPositions }: TeamsearchProps) => {
  const [input, setInput] = useState('');
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setName(input);
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
          onClick={handleClick}
        />
        <OneFieldFilter data={positionsList} setFilter={setPositions} name="Team"/>
      </div>
    </div>
  );
};
