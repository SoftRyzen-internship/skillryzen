import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { setCurrentTime, setTime } from 'redux/testingInfo/testingInfoSlise';
import { Theme } from 'constans/types';
import { convertTime } from 'utils/convertTime';
import {
  getResultTime,
  getTimeLeft,
} from 'redux/testingInfo/testingInfoSelectors';

import s from './Timer.module.scss';

interface Timer {
  theme?: Theme;
}

export const Timer = ({ theme = 'dark' }: Timer) => {
  const { hasNextQuestion, questionId, totalTime, currentTime, number } =
    useAppSelector(state => state.testingInfo);
  const timeResult = useAppSelector(getResultTime);
  const timeLeft = useAppSelector(getTimeLeft);

  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState<number>(currentTime);

  useEffect(() => {
    if (timeResult) return;
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
    <div>
      <p className={`${s.timer__text} ${s[`timer__text--${theme}`]}`}>
        Time left:
      </p>
      <p className={`${s.timer__time} ${s[`timer__time--${theme}`]}`}>
        {timeResult ? convertTime(timeLeft) : convertTime(seconds)}
      </p>
    </div>
  );
};
