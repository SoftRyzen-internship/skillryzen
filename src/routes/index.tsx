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
import StudentNotificationsPage from 'pages/StudentNotificationsPage';
import FeedbackPage from 'pages/FeedbackPage';
import UnderDevelopmentPage from 'pages/UnderDevelopmentPage';
import InviteModulePage from 'pages/InviteModulePage';
import TeamPage from 'pages/TeamPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { ROUTES } from './routes.const';

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
                      path: ROUTES.NOTIFICATIONS,
                      children: [
                        {
                          path: '',
                          element: (
                            <Navigate
                              to={ROUTES.NOTIFICATIONS_NEW}
                              replace={true}
                            />
                          ),
                        },
                        {
                          path: ROUTES.NOTIFICATIONS_NEW,
                          element: <StudentNotificationsPage />,
                        },
                        {
                          path: ROUTES.NOTIFICATIONS_ALL,
                          element: <StudentNotificationsPage />,
                        },
                      ],
                    },
                    {
                      path: ROUTES.COINS,
                      element: <UnderDevelopmentPage />,
                    },
                    {
                      path: ROUTES.FEEDBACK,
                      element: <FeedbackPage />,
                    },
                    {
                      path: ROUTES.TEAM,
                      element: <TeamPage />,
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
            // This block for admin user
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
                  path: ROUTES.INVITE_MODULE,
                  element: <InviteModulePage />,
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
