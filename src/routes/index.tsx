import { Navigate, useRoutes, Outlet } from 'react-router-dom';

import { useAppSelector } from 'hooks/hook';

import {
  MainWrapper,
  AuthWrapper,
  PublicRoute,
  ProtectedRoute,
} from 'modules/wrappers';

import LoginPage from 'pages/LoginPage';
import TestsPage from 'pages/TestsPage';
import CompanyPage from 'pages/CompanyPage';
import TestingPage from 'pages/TestingPage';
import TestEndPage from 'pages/TestEndPage';
import RegisterPage from 'pages/RegisterPage';
import TestStartPage from 'pages/TestStartPage';
import ProfilePage from 'pages/ProfilePage';
import CoinsPage from 'pages/CoinsPage';
import NotificationsPage from 'pages/NotificationsPage';
import ProfileSettingsPage from 'pages/ProfileSettingsPage';
import FeedbackPage from 'pages/FeedbackPage';
import UnderDevelopmentPage from 'pages/UnderDevelopmentPage';
import InviteModulePage from 'pages/InviteModulePage';
import TeamPage from 'pages/TeamPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { ROUTES } from './routes.const';

export const AppRoutes = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const routes = [
    {
      path: ROUTES.HOME,
      children: [
        {
          element: (
            <PublicRoute isAuth={isAuth}>
              <AuthWrapper>
                <Outlet />
              </AuthWrapper>
            </PublicRoute>
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
            <ProtectedRoute isAuth={isAuth}>
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
                      element: <ProfilePage />,
                    },
                    {
                      path: ROUTES.PROFILE_SETTINGS,
                      element: <ProfileSettingsPage />,
                    },
                    {
                      path: ROUTES.NOTIFICATIONS,
                      element: <NotificationsPage />,
                    },
                    {
                      path: ROUTES.COINS,
                      element: <CoinsPage />,
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
                {
                  path: ROUTES.COMPANY_PROFILE,
                  element: <UnderDevelopmentPage />,
                },
                {
                  path: ROUTES.COMPANY_SETTINGS,
                  element: <UnderDevelopmentPage />,
                },
              ],
            },
            { path: '/company', element: <CompanyPage /> },
          ],
        },
      ],
    },
    {
      path: '*',
      element: isAuth ? (
        <MainWrapper showSidebar={true} showHeader={true} isTestingPage={false}>
          <NotFoundPage />
        </MainWrapper>
      ) : (
        <NotFoundPage />
      ),
    },
  ];
  const routing = useRoutes(routes);

  return routing;
};
