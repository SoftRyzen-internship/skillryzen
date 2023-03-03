import { ProgressBar } from 'ui-kit';
import { Timer } from 'modules/common/components/Timer';
import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';

import s from './TestHeader.module.scss';

export const TestHeader = () => {
  const { theme }: IThemeContext = useThemeContext();
  
  return (
    <header className={`${s.test__header} ${s[`test__header--${theme}`]}`}>
      <div className={s.test__container}>
        <ProgressBar currentNumber={1} totalNumber={10} isPrevRight={true} theme={theme}/>
        <Timer time={3} theme={theme}/>
      </div>
    </header>
  );
};
