import { useEffect, useState } from 'react';

import { Theme } from 'modules/common/types';
import { convertTime } from 'utils/convertTime';

import s from './Timer.module.scss';

interface Timer {
  theme?: Theme;
}

export const Timer: React.FC<Timer> = ({ theme = 'dark' }) => {
  const [seconds, setSeconds] = useState(0);

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

  return (
    <div>
      <p className={`${s.timer__text} ${s[`timer__text--${theme}`]}`}>Time:</p>
      <p className={`${s.timer__time} ${s[`timer__time--${theme}`]}`}>
        {convertTime(seconds)}
      </p>
    </div>
  );
};
