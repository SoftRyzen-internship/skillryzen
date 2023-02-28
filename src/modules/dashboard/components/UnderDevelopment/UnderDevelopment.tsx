import React from 'react';

import s from './UnderDevelopment.module.scss';

interface IUnderDevelopmentProps {
  title: string;
}

export const UnderDevelopment = ({ title }: IUnderDevelopmentProps) => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{title}</h2>
      </div>
    </section>
  );
};
