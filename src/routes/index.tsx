import { Navigate, useRoutes, Outlet } from 'react-router-dom';

import { useAppSelector } from 'hooks/hook';

import {
  MainWrapper,
  AuthWrapper,
  PublickRoute,
  ProtectedRoute,
} from 'modules/wrappers';

import LoginPage from 'pages/LoginPage';
import TestsPage from 'pages/TestsPage';
import CompanyPage from 'pages/CompanyPage';
import TestingPage from 'pages/TestingPage';
import TestEndPage from 'pages/TestEndPage';
import RegisterPage from 'pages/RegisterPage';
import TestStartPage from 'pages/TestStartPage';
import StudentProfilePage from 'pages/StudentProfilePage';
import StudentSettingsPage from 'pages/StudentSettingsPage';
import UnderDevelopmentPage from 'pages/UnderDevelopmentPage';

import { ROUTES } from './routes.const';
import FeedbackPage from 'pages/FeedbackPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const AppRoutes = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const routes = [
    {
      path: ROUTES.HOME,
      children: [
        {
          element: (
            <PublickRoute isLoggedIn={isLoggedIn}>
              <AuthWrapper>
                <Outlet />
              </AuthWrapper>
            </PublickRoute>
          ),
          children: [
            {
              path: '',
              element: <Navigate to={ROUTES.LOGIN} replace={true} />,
            },
            { path: ROUTES.LOGIN, element: <LoginPage /> },
            { path: ROUTES.REGISTER, element: <RegisterPage /> },
          ],
        },
        {
          element: (
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Outlet />
            </ProtectedRoute>
          ),
          children: [
            {
              children: [
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
                      element: <StudentProfilePage />,
                    },
                    {
                      path: ROUTES.PROFILE_SETTINGS,
                      element: <StudentSettingsPage />,
                    },
                    {
                      path: ROUTES.FEEDBACK,
                      element: <FeedbackPage />,
                    },
                    {
                      path: ROUTES.TEAM,
                      element: <UnderDevelopmentPage />,
                    },
                  ],
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
            { path: '/company', element: <CompanyPage /> },
          ],
        },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ];
  const routing = useRoutes(routes);

  return routing;
};
