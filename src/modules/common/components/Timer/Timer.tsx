import { useEffect, useState } from 'react';

import s from './Timer.module.scss';

interface ITimer {
  time: number;
}

const convertTime = (time: number) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export const Timer: React.FC<ITimer> = ({ time }) => {
  const [seconds, setSeconds] = useState(time * 3600);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  return (
    <div>
      <p className={s.timer__text}>Time left:</p>
      <p className={s.timer__time}>{convertTime(seconds)}</p>
    </div>
  );
};
