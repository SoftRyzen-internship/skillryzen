// import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import CompanyPage from '../pages/CompanyPage/CompanyPage';
import TestsPage from '../pages/TestsPage/TestsPage';
import TestingPage from '../pages/TestingPage/TestingPage';

import { TestsMain } from 'modules/dashboard/components/TestsMain';
import { TestingMain } from 'modules/dashboard/components/TestingMain';
import { TestInfo } from 'modules/dashboard/components/TestInfo';

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

export const AppRoutes = () => {
  const routes = [
    { path: '/register', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/', element: <LoginPage /> },

    { path: '/company', element: <CompanyPage /> },

    {
      path: '/student',
      children: [
        {
          path: 'dashboard',
          element: <div>Dashboard</div>,
        },

        {
          path: 'tests',
          element: <TestsPage />,
          children: [
            {
              path: '',
              element: <TestsMain />,
            },
            {
              path: ':testId',
              element: <TestInfo />,
            },
          ],
        },

        {
          path: 'testing',
          element: <TestingPage />,
          children: [
            {
              path: '',
              element: <TestingMain />,
            },
          ],
        },

        {
          path: 'pet-projects',
          element: <div>Petprojects</div>,
        },

        {
          path: 'leader-board',
          element: <div>Leaderboard</div>,
        },

        {
          path: 'vacancies',
          element: <div>Vacancies</div>,
        },

        {
          path: 'profile',
          element: <div>Profile</div>,
        },

        {
          path: 'settings',
          element: <div>Settings</div>,
        },
        {
          path: 'feedback',
          element: <div>Feedback</div>,
        },
      ],
    },
    { path: '*', element: <h1>404 Not Found</h1> },
  ];
  const routing = useRoutes(routes);

  return routing;
};
