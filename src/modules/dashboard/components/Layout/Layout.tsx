import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'modules/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header isTestingPage={false} />
      {children}
      <Outlet />
    </>
  );
};
