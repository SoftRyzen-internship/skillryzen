import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { setCurrentTime, setTime } from 'redux/testingInfo/testingInfoSlise';
import { Theme } from 'constans/types';
import { convertTime } from 'utils/convertTime';
import {
  getCurrentTime,
  getHasNextQuestion,
  getQuestionId,
  getQuestionNumber,
  getResultTime,
  getTotalTime,
} from 'redux/testingInfo/testingInfoSelectors';

import s from './Timer.module.scss';

interface Timer {
  theme?: Theme;
}

export const Timer = ({ theme = 'dark' }: Timer) => {
  const hasNextQuestion = useAppSelector(getHasNextQuestion);
  const questionId = useAppSelector(getQuestionId);
  const totalTime = useAppSelector(getTotalTime);
  const currentTime = useAppSelector(getCurrentTime);
  const timeResult = useAppSelector(getResultTime);
  const number = useAppSelector(getQuestionNumber);
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState<number>(currentTime);

  useEffect(() => {
    if (!seconds && !totalTime) return;
    if (seconds === 0 && totalTime) {
      dispatch(setTime(totalTime));
      return;
    }
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [seconds]);

  useEffect(() => {
    if (hasNextQuestion) return;
    dispatch(setTime(totalTime - seconds));
    // eslint-disable-next-line
  }, [hasNextQuestion]);

  useEffect(() => {
    if (!totalTime) return;
    setSeconds(totalTime);
    // eslint disable next line
  }, [totalTime]);

  useEffect(() => {
    if (!questionId) return;
    dispatch(setCurrentTime(number === 1 ? totalTime : seconds));
    // eslint-disable-next-line
  }, [questionId]);

  return (
    <div>
      <p className={`${s.timer__text} ${s[`timer__text--${theme}`]}`}>
        Time left:
      </p>
      <p className={`${s.timer__time} ${s[`timer__time--${theme}`]}`}>
        {timeResult
          ? convertTime(totalTime - timeResult)
          : convertTime(seconds)}
      </p>
    </div>
  );
};
