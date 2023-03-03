import { Navigate, useRoutes, Outlet } from 'react-router-dom';

import { MainWrapper } from 'modules/wrappers/MainWrapper';

import LoginPage from 'pages/LoginPage';
import TestsPage from 'pages/TestsPage';
import CompanyPage from 'pages/CompanyPage';
import TestingPage from 'pages/TestingPage';
import TestEndPage from 'pages/TestEndPage';
import RegisterPage from 'pages/RegisterPage';
import TestStartPage from 'pages/TestStartPage';
import StudentSettingsPage from 'pages/StudentSettingsPage';
import UnderDevelopmentPage from 'pages/UnderDevelopmentPage';

import { ROUTES } from './routes.const';

export const AppRoutes = () => {
  const routes = [
    { path: '/register', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/', element: <LoginPage /> },
    {
      path: ROUTES.STUDENT,
      children: [
        {
          path: '',
          element: <Navigate to={ROUTES.CERTIFICATION} replace={true} />,
        },
        {
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <Outlet />
            </MainWrapper>
          ),
          children: [
            {
              path: ROUTES.DASHBOARD,
              element: <UnderDevelopmentPage />,
            },
            {
              path: ROUTES.CERTIFICATION,
              element: <Outlet />,
              children: [
                {
                  path: '',
                  element: <TestsPage />,
                },
                {
                  path: ':testId',
                  element: <TestStartPage />,
                },
              ],
            },
            {
              path: ROUTES.PETPROJECTS,
              element: <UnderDevelopmentPage />,
            },
            {
              path: ROUTES.LEADERBOARD,
              element: <UnderDevelopmentPage />,
            },
            {
              path: ROUTES.VACANCIES,
              element: <UnderDevelopmentPage />,
            },
            {
              path: ROUTES.PROFILE,
              element: <UnderDevelopmentPage />,
            },
            {
              path: ROUTES.SETTINGS,
              element: <StudentSettingsPage />,
            },
            {
              path: ROUTES.FEEDBACK,
              element: <UnderDevelopmentPage />,
            },
          ],
        },
        {
          path: ROUTES.TESTING,
          element: (
            <MainWrapper
              showSidebar={false}
              showHeader={true}
              isTestingPage={true}
            >
              <Outlet />
            </MainWrapper>
          ),
          children: [
            {
              path: '',
              element: <TestingPage />,
            },
            {
              path: ROUTES.TEST_END,
              element: <TestEndPage />,
            },
          ],
        },
      ],
    },
    { path: '/company', element: <CompanyPage /> },
    { path: '*', element: <h1>404 Not Found</h1> },
  ];
  const routing = useRoutes(routes);

  return routing;
};
