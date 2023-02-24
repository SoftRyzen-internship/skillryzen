import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@modules/dashboard'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header title="My App" />
      {children}
      <Outlet />
      <Footer text="Copyright © 2023" />
    </>
  )
}
