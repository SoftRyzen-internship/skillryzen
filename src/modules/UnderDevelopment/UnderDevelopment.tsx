import s from './UnderDevelopment.module.scss';

interface UnderDevelopmentProps {
  title: string;
}

export const UnderDevelopment = ({ title }: UnderDevelopmentProps) => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{title}</h2>
      </div>
    </section>
  );
};
