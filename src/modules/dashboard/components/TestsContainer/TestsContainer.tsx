import s from './TestsContainer.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const TestsContainer = ({ children }: IProps) => {
  return <div className={s.container}>{children}</div>;
};
