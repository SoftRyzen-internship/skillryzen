import s from './Spinner.module.scss';

interface Spinner {
  className?: string;
}

export const Spinner = ({ className }: Spinner) => {
  return <span className={`${s.loader} ${className}`}></span>;
};
