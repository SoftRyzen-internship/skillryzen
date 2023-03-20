import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { Theme } from 'constans/types';
import { convertTime } from 'utils/convertTime';
import { setCurrentTime, setTime } from 'redux/testingInfo/testingInfoSlise';
import { getResultsTestId } from 'redux/testingInfo/testingInfoSelectors';

import s from './Timer.module.scss';
import { useLocation } from 'react-router';

interface Timer {
  theme?: Theme;
}

export const Timer = ({ theme = 'dark' }: Timer) => {
  const { hasNextQuestion, questionId, totalTime, currentTime, number } =
    useAppSelector(state => state.testingInfo);
  const resultsTestId = useAppSelector(getResultsTestId);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState<number>(currentTime);

  useEffect(() => {
    if (resultsTestId) return;
    if (!totalTime) return;

    if (seconds === 0 && questionId) {
      dispatch(setTime({ time: totalTime - seconds, timeLeft: seconds }));
      return;
    }
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [seconds]);

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

  useEffect(() => {
    if (!questionId || number === 1) return;
    dispatch(setCurrentTime(seconds));
    // eslint-disable-next-line
  }, [questionId]);

  return (
    <>
      {pathname !== '/testing/test-end' && (
        <div>
          <p className={`${s.timer__text} ${s[`timer__text--${theme}`]}`}>
            Time left:
          </p>
          <p className={`${s.timer__time} ${s[`timer__time--${theme}`]}`}>
            {convertTime(seconds)}
          </p>
        </div>
      )}
    </>
  );
};
