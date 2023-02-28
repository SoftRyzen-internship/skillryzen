// import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import StudentPage from '../pages/StudentPage/StudentPage';
import CompanyPage from '../pages/CompanyPage/CompanyPage';
import TestsPage from '../pages/TestsPage/TestsPage';
import TestingPage from '../modules/pages/TestingPage/TestingPage';

import { TestsMain } from '../modules/dashboard/components/TestsMain';
import { TestingMain } from '../modules/dashboard/components/TestingMain';

// const LoginPage = lazy(() => import('@modules/pages/LoginPage/LoginPage'));
// const RegisterPage = lazy(
//   () => import('@modules/pages/RegisterPage/RegisterPage')
// );
// const StudentPage = lazy(
//   () => import('@modules/pages/StudentPage/StudentPage')
// );
// const CompanyPage = lazy(
//   () => import('@modules/pages/CompanyPage/CompanyPage')
// );
// const TestsPage = lazy(() => import('@modules/pages/TestsPage/TestsPage'));

const routes = [
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <LoginPage /> },
  { path: '/student', element: <StudentPage /> },
  { path: '/company', element: <CompanyPage /> },
  {
    path: '/tests/',
    element: <TestsPage />,
    children: [
      {
        path: '',
        element: <TestsMain />,
      },
    ],
  },
  {
    path: '/testing',
    element: <TestingPage />,
    children: [
      {
        path: '',
        element: <TestingMain />,
      },
    ],
  },

  { path: '*', element: <h1>404 Not Found</h1> },
];

export const AppRoutes = () => {
  const routing = useRoutes(routes);

  return routing;
};
