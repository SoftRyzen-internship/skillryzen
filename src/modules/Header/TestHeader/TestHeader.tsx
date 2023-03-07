import { ProgressBar } from 'ui-kit';
import { Timer } from 'modules/common';
import { IThemeContext } from 'constans/types';

import { useThemeContext } from 'context/themeContext';

import s from './TestHeader.module.scss';

export const TestHeader = () => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <header className={`${s.test__header} ${s[`test__header--${theme}`]}`}>
      <div className={s.test__container}>
        <ProgressBar theme={theme} />
        <Timer theme={theme} />
      </div>
    </header>
  );
};
