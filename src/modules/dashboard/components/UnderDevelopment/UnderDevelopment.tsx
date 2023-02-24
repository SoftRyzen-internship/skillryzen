import React from 'react';
import s from './UnderDevelopment.module.scss';

interface UnderDevelopmentProps {
  title: string;
}

export const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({
  title,
}) => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{title}</h2>
      </div>
    </section>
  );
};
