import React from 'react';
import { CheckMark } from '../../theme/icons.const';
import s from './Steps.module.scss';

interface ICurrentStep {
  currentStep: number;
}

export const Steps = ({ currentStep }: ICurrentStep) => {
  const steps = [1, 2, 3, 4];

  // Classname контейнера для кружечків (синя обводка активного степу)
  const setClassnameCircleContainer = (idx: number) => {
    if (currentStep === idx + 1) {
      return s.circleContainerActive;
    }

    return s.circleContainer;
  };

  // Classname для кружечків
  const setClassnameCircle = (idx: number) => {
    if (currentStep === idx + 1) {
      return s.activeCircle;
    }
    if (currentStep > idx + 1) {
      return s.prevCircle;
    }

    return s.inactiveCircle;
  };

  // Classname для ліній
  const setClassnameLine = (idx: number) => {
    // позаду активного степу
    if (idx < currentStep - 1) {
      return s.blueLine;
    }

    // після активного степу
    if (idx === currentStep - 1) {
      return s.halfBlueLine;
    }
    return s.inactiveLine;
  };

  return (
    <div>
      <ul className={s.list}>
        {steps.map((step, idx) => (
          <li key={step} className={s.itemWrapper}>
            <div className={s.stepWrapper}>
              {' '}
              <div className={setClassnameCircleContainer(idx)}>
                {' '}
                <div className={setClassnameCircle(idx)}>
                  {currentStep <= idx + 1 && step}
                  {currentStep > idx + 1 && <CheckMark />}
                </div>
              </div>
              {step < 4 && (
                <div className={s.lineWrapper}>
                  <div className={setClassnameLine(idx)}></div>
                </div>
              )}
            </div>
            <p className={s.text}>Step {`${step}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
