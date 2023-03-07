import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { setTime } from 'redux/testingInfo/testingInfoSlise';
import { Theme } from 'constans/types';
import { convertTime } from 'utils/convertTime';
import {
  getHasNextQuestion,
  getTimeTest,
} from 'redux/testingInfo/testingInfoSelectors';

import s from './Timer.module.scss';

interface Timer {
  theme?: Theme;
}

export const Timer = ({ theme = 'dark' }: Timer) => {
  const hasNextQuestion = useAppSelector(getHasNextQuestion);
  const timeResult = useAppSelector(getTimeTest);
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    // if (seconds > 0) {
    //   const intervalId = setInterval(() => {
    //     setSeconds((seconds) => seconds - 1);
    //   }, 1000);
    //   return () => clearInterval(intervalId);
    // }

    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  useEffect(() => {
    if (hasNextQuestion) return;
    dispatch(setTime(seconds));
  }, [hasNextQuestion]);

  return (
    <div>
      <p className={`${s.timer__text} ${s[`timer__text--${theme}`]}`}>Time:</p>
      <p className={`${s.timer__time} ${s[`timer__time--${theme}`]}`}>
        {timeResult ? convertTime(timeResult) : convertTime(seconds)}
      </p>
    </div>
  );
};
