import { ICONS } from 'ui-kit/icons';

import { useEffect } from 'react';

import s from './Notification.module.scss';

interface Notification {
  context: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  delay: number;
}

export const Notification = ({ context, onClick, delay }: Notification) => {
  useEffect(() => {
    const timerId = setTimeout(onClick, delay);
    return () => clearTimeout(timerId);
  }, [onClick, delay]);

  return (
    context && (
      <div className={s.notification}>
        <p className={s.context}>
          Error!
          <span>{context}</span>
        </p>
        <button onClick={onClick} type='button'>
          <ICONS.CROSS_SMALL className={s.cross} />
        </button>
      </div>
    )
  );
};
