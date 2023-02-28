import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Outlet />
    </>
  );
};
