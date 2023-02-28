import * as React from 'react';

import s from './TestInfoContainer.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const TestInfoContainer = ({ children }: IProps) => {
  return <div className={s.container}>{children}</div>;
};
