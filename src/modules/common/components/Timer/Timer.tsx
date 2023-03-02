import { useEffect, useState } from 'react';
import { convertTime } from 'utils/convertTime';

import s from './Timer.module.scss';

interface ITimer {
  time: number;
}

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
