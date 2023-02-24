import React from 'react';
import s from './UnderDevelopment.module.scss';

interface UnderDevelopmentProps {
  title: string;
}

export const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({
  title,
}) => {
  return (
    <div className={s.background}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );
};
