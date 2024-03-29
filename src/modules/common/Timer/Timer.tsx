import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useIsOnline } from 'react-use-is-online';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'hooks';
import { Theme } from 'constants/types';
import { convertTime } from 'utils/convertTime';
import { setCurrentTime, setTime } from 'redux/testingInfo/testingInfoSlice';
import { getResultsTestId } from 'redux/testingInfo/testingInfoSelectors';

import s from './Timer.module.scss';

interface Timer {
  theme?: Theme;
}

export const Timer = ({ theme = 'dark' }: Timer) => {
  const { hasNextQuestion, questionId, totalTime, currentTime } =
    useAppSelector(state => state.testingInfo);
  const resultsTestId = useAppSelector(getResultsTestId);
  const [seconds, setSeconds] = useState<number>(currentTime);
  const { t } = useTranslation();
  const { isOffline } = useIsOnline();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOffline) return;
    if (resultsTestId) return;
    if (!totalTime) return;

    if (seconds === 0 && questionId) {
      dispatch(setTime({ time: totalTime - seconds, timeLeft: seconds }));
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    window.addEventListener('beforeunload', function () {
      dispatch(setCurrentTime(seconds));
    });

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [seconds, isOffline]);

  useEffect(() => {
    if (hasNextQuestion) return;
    dispatch(setTime({ time: totalTime - seconds, timeLeft: seconds }));
    // eslint-disable-next-line
  }, [hasNextQuestion]);

  useEffect(() => {
    if (!totalTime) return;
    setSeconds(currentTime);
    // eslint-disable-next-line
  }, [totalTime]);

  return (
    <>
      {pathname !== '/testing/test-end' && (
        <div>
          <p className={`${s[`timer--${theme}`]} ${s.timer__text}`}>
            {t('testing.timer')}
          </p>
          <p className={`${s[`timer--${theme}`]}`}>{convertTime(seconds)}</p>
        </div>
      )}
    </>
  );
};
