import s from './AuthContainer.module.scss';

export const AuthContainer = ({ children }) => {
  return <main className={s.container}>{children}</main>;
};
