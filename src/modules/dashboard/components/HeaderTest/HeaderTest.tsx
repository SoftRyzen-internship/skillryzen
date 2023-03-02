import { ProgressBar } from 'ui-kit/ProgressBar';
import { Timer } from 'modules/common/components/Timer';

import s from './HeaderTest.module.scss';

interface IHeaderTest {
  currentNumber: number;
}

export const HeaderTest = ({currentNumber}: IHeaderTest) => {
  return (
    <header className={s.test__header}>
      <div className={s.test__container}>
        <ProgressBar currentNumber={currentNumber} totalNumber={20} isPrevRight={true} />
        <Timer time={3} />
      </div>
    </header>
  );
};
