import { Navigate, useRoutes, Outlet } from 'react-router-dom';

import { useAppSelector } from 'hooks';
import { getUserRole } from 'redux/authSlice/authSelectors';

import {
  MainWrapper,
  AuthWrapper,
  PublicRoute,
  ProtectedRoute,
} from 'modules/wrappers';

import TeamPage from 'pages/TeamPage';
import LoginPage from 'pages/LoginPage';
import TestsPage from 'pages/TestsPage';
import CoinsPage from 'pages/CoinsPage';
import TestingPage from 'pages/TestingPage';
import TestEndPage from 'pages/TestEndPage';
import ProfilePage from 'pages/ProfilePage';
import RegisterPage from 'pages/RegisterPage';
import FeedbackPage from 'pages/FeedbackPage';
import TestStartPage from 'pages/TestStartPage';
import LeaderboardPage from 'pages/LeaderboardPage';
import InviteModulePage from 'pages/InviteModulePage';
import NotificationsPage from 'pages/NotificationsPage';
import CompanyProfilePage from 'pages/CompanyProfilePage';
import CompanySettingsPage from 'pages/CompanySettingsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import ProfileSettingsPage from 'pages/ProfileSettingsPage';
import UnderDevelopmentPage from 'pages/UnderDevelopmentPage';

import { ROUTES } from './routes.const';
import { USER_ROLE } from 'constans/consts';

export const AppRoutes = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const role = useAppSelector(getUserRole);

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
                      element:
                        role !== USER_ROLE.candidate ? (
                          <Navigate
                            to={ROUTES.COMPANY_CERTIFICATION}
                            replace={true}
                          />
                        ) : (
                          <Outlet />
                        ),
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
                      element: <LeaderboardPage />,
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
              ...(role !== USER_ROLE.candidate && {
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
                    path: ROUTES.COMPANY_DASHBOARD,
                    element: <UnderDevelopmentPage />,
                  },
                  {
                    path: ROUTES.COMPANY_CERTIFICATION,
                    element: <UnderDevelopmentPage />,
                  },
                  {
                    path: ROUTES.STUDENTS,
                    element: <UnderDevelopmentPage />,
                  },
                  {
                    path: ROUTES.INVITE_MODULE,
                    element: <InviteModulePage />,
                  },
                  {
                    path: ROUTES.COMPANY_PROFILE,
                    element: <CompanyProfilePage />,
                  },
                  {
                    path: ROUTES.COMPANY_SETTINGS,
                    element: <CompanySettingsPage />,
                  },
                ],
              }),
            },
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
