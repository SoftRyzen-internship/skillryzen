import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { ICONS } from 'ui-kit/icons';
import { Input } from 'ui-kit/index';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './TeamSearch.module.scss';


interface TeamsearchProps {
  onClick: React.Dispatch<React.SetStateAction<string>>;
}

export const TeamSearch = ({ onClick }: TeamsearchProps) => {
  const [input, setInput] = useState('');
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    onClick(input);
  };

  return (
    <div className={s.teamSearch}>
      <h2
        className={`${s.teamSearch__title} ${s[`teamSearch__title--${theme}`]}`}
      >
        Our team
      </h2>
      <Input
        name='search'
        placeholder={t('testsMain.search')}
        button={true}
        icon={<ICONS.SEARCH fill='#9D9FB5' />}
        theme={theme}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
};
