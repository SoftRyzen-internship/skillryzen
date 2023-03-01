import s from './MainContainer.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: IProps) => {
  return <div className={s.container}>{children}</div>;
};
