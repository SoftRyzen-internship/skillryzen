import * as React from 'react';

import s from './AuthContainer.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const AuthContainer = ({ children }: IProps) => {
  return <main className={s.container}>{children}</main>;
};
