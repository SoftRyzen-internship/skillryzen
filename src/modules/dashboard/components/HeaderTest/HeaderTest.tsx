import { ProgressBar } from 'ui-kit/ProgressBar';
import { Timer } from 'modules/common/components/Timer';
import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';

import s from './HeaderTest.module.scss';


interface IHeaderTest {
  currentNumber: number;
}

export const HeaderTest = ({currentNumber}: IHeaderTest) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <header className={`${s.test__header} ${s[`test__header--${theme}`]}`}>
      <div className={s.test__container}>
        <ProgressBar currentNumber={currentNumber} totalNumber={20} isPrevRight={true} theme={theme}/>
        <Timer time={3} theme={theme}/>
      </div>
    </header>
  );
};
