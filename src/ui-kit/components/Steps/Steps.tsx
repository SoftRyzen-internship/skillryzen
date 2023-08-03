import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constants/types';

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
  steps: number;
}

export const Steps = ({ steps, currentStep }: ICurrentStep) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const stepsArr = steps === 3 ? [1, 2, 3] : [1, 2, 3, 4];

  // ClassName контейнера для кружечків (синя обводка активного степу)
  const setClassNameCircleContainer = (idx: number) => {
    if (currentStep === idx + 1) {
      return s.circleContainerActive;
    }

    return s.circleContainer;
  };

  // ClassName для кружечків
  const setClassNameCircle = (idx: number) => {
    if (currentStep === idx + 1) {
      return s.activeCircle;
    }
    if (currentStep > idx + 1) {
      return s.prevCircle;
    }

    return `${s.inactiveCircle} ${objectTheme[theme].inactiveCircle}`;
  };

  // ClassName для ліній
  const setClassNameLine = (idx: number) => {
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
        {stepsArr.map((step, idx) => (
          <li key={step} className={s.itemWrapper}>
            <div className={s.stepWrapper}>
              <div className={setClassNameCircleContainer(idx)}>
                <div className={setClassNameCircle(idx)}>
                  {currentStep <= idx + 1 ? (
                    step
                  ) : (
                    <ICONS.CHECK_MARK className={s.icon} />
                  )}
                </div>
              </div>
              {step < steps && (
                <div className={s.lineWrapper}>
                  <div className={setClassNameLine(idx)}></div>
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
