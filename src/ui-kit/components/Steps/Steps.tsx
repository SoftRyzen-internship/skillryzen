import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'modules/common/types';

import s from './Steps.module.scss';

const objectTheme = {
  dark: {
    halfBlueLine: s.halfBlueLineDark,
    inactiveCircle: s.inactiveCircleDark,
    inactiveLine: s.inactiveLineDark,
  },
  light: {
    halfBlueLine: s.halfBlueLineLight,
    inactiveCircle: s.inactiveCircleLight,
    inactiveLine: s.inactiveLineLight,
  },
};

interface ICurrentStep {
  currentStep: number;
}

export const Steps = ({ currentStep }: ICurrentStep) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const steps = [1, 2, 3];

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

    return `${s.inactiveCircle} ${objectTheme[theme].inactiveCircle}`;
  };

  // Classname для ліній
  const setClassnameLine = (idx: number) => {
    // позаду активного степу
    if (idx < currentStep - 1) {
      return s.blueLine;
    }

    // після активного степу
    if (idx === currentStep - 1) {
      return objectTheme[theme].halfBlueLine;
    }
    return `${s.inactiveLine} ${objectTheme[theme].inactiveLine}`;
  };

  return (
    <div>
      <ul className={s.list}>
        {steps.map((step, idx) => (
          <li key={step} className={s.itemWrapper}>
            <div className={s.stepWrapper}>
              <div className={setClassnameCircleContainer(idx)}>
                <div className={setClassnameCircle(idx)}>
                  {currentStep <= idx + 1 ? (
                    step
                  ) : (
                    <ICONS.CHECK_MARK className={s.icon} />
                  )}
                </div>
              </div>
              {step < 3 && (
                <div className={s.lineWrapper}>
                  <div className={setClassnameLine(idx)}></div>
                </div>
              )}
            </div>
            <p className={s.text}>
              {t('auth.step')} {`${step}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
