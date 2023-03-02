import { ProgressBar } from 'ui-kit/ProgressBar';
import { Timer } from 'modules/common/components/Timer';

import s from './TestHeader.module.scss';

export const TestHeader = () => {
  return (
    <header className={s.test__header}>
      <div className={s.test__container}>
        <ProgressBar currentNumber={1} totalNumber={20} isPrevRight={true} />
        <Timer time={3} />
      </div>
    </header>
  );
};
