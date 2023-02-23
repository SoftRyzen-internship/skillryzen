import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../modules/pages/Home/Home'

const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '*', element: <h1>404 Not Found</h1> },
  ])

  return routes
}

export default AppRoutes
