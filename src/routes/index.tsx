import { useRoutes } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import CompanyPage from 'pages/CompanyPage';
import TestsPage from 'pages/TestsPage';
import TestingPage from 'pages/TestingPage';

import { TestsMain } from 'modules/dashboard/components/TestsMain';
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
        {
          path: 'dashboard',
          element: <UnderDevelopmentPage />,
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
