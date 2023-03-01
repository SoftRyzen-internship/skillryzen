import { Navigate, useRoutes } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import CompanyPage from 'pages/CompanyPage';
import TestsPage from 'pages/TestsPage';
import TestingPage from 'pages/TestingPage';

import { TestsAll } from 'modules/dashboard/components/TestsAll';
import { TestsMy } from 'modules/dashboard/components/TestsMy';
import { TestingMain } from 'modules/dashboard/components/TestingMain';
import { TestInfo } from 'modules/dashboard/components/TestInfo';
import { UnderDevelopmentPage } from 'pages/UnderDevelopmentPage';

export const AppRoutes = () => {
  const routes = [
    { path: '/register', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/', element: <LoginPage /> },

    { path: '/company', element: <CompanyPage /> },

    {
      path: '/student',
      children: [
        { path: '', element: <Navigate to='certification' /> },
        {
          path: 'dashboard',
          element: <UnderDevelopmentPage />,
        },

        {
          path: 'certification',
          element: <TestsPage />,
          children: [
            {
              path: '',
              element: <Navigate to='all' />,
            },
            {
              path: 'all',
              children: [
                {
                  path: '',
                  element: <TestsAll />,
                },
                {
                  path: ':testId',
                  element: <TestInfo />,
                },
              ],
            },
            {
              path: 'my',
              children: [
                {
                  path: '',
                  element: <TestsMy />,
                },
                {
                  path: ':testId',
                  element: <TestInfo />,
                },
              ],
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
          element: <UnderDevelopmentPage />,
        },

        {
          path: 'leader-board',
          element: <UnderDevelopmentPage />,
        },

        {
          path: 'vacancies',
          element: <UnderDevelopmentPage />,
        },

        {
          path: 'profile',
          element: <UnderDevelopmentPage />,
        },

        {
          path: 'settings',
          element: <UnderDevelopmentPage />,
        },
        {
          path: 'feedback',
          element: <UnderDevelopmentPage />,
        },
      ],
    },
    { path: '*', element: <h1>404 Not Found</h1> },
  ];
  const routing = useRoutes(routes);

  return routing;
};
