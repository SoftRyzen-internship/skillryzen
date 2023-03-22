import s from './ScrollContainer.module.scss';

interface Props {
  children: React.ReactNode;
}

export const ScrollContainer = ({ children }: Props) => {
  return <div className={s.wrapper}>{children}</div>;
};
