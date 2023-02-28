import React from 'react';

import { ProgressBar } from 'ui-kit/ProgressBar';
import { Timer } from 'modules/common/components/Timer';

import s from './HeaderTest.module.scss';

export const HeaderTest = () => {
  return (
    <header className={s.test__header}>
      <div className={s.test__container}>
        <ProgressBar currentNumber={2} totalNumber={55} isPrevRight={true} />
        <Timer time={3} />
      </div>
    </header>
  );
};
