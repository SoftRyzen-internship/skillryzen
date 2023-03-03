import { Navigate, useRoutes } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import CompanyPage from 'pages/CompanyPage';
import TestsPage from 'pages/TestsPage';
import TestingPage from 'pages/TestingPage';
import UnderDevelopmentPage from 'pages/UnderDevelopmentPage';
import TestStartPage from 'pages/TestStartPage';
import TestEndPage from 'pages/TestEndPage';

import { TestingMain } from 'modules/dashboard/components/TestingMain';
import { TestInfo } from 'modules/dashboard/components/TestInfo';

import { MainWrapper } from 'modules/wrappers/MainWrapper';
import { TestsPageComponent } from 'modules/TestsPageComponent';

export const AppRoutes = () => {
  const routes = [
    { path: '/register', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/', element: <LoginPage /> },

    { path: '/company', element: <CompanyPage /> },

    {
      path: '/student',
      children: [
        { path: '', element: <Navigate to='certification' replace={true} /> },
        {
          path: 'dashboard',
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
        },

        {
          path: 'certification',
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <TestsPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <TestsPage />
            </MainWrapper>
          ),
          children: [
            {
              path: '',
              element: <TestsPageComponent />,
            },
            {
              path: ':testId',
              element: <TestStartPage />,
            },
          ],
        },

        {
          path: 'testing',
          element: (
            <MainWrapper
              showSidebar={false}
              showHeader={true}
              isTestingPage={true}
            >
              <TestingPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={false}
              showHeader={true}
              isTestingPage={true}
            >
              <TestsPage />
            </MainWrapper>
          ),
          children: [
            {
              path: '',
              element: (
                <MainWrapper
                  showSidebar={true}
                  showHeader={true}
                  isTestingPage={false}
                >
                  <TestingMain />
                </MainWrapper>
              ),
              element: <TestingPage />,
            },
          ],
        },

        {
          path: 'testing',
          element: (
            <MainWrapper
              showSidebar={false}
              showHeader={true}
              isTestingPage={false}
            >
              <TestsPage />
            </MainWrapper>
          ),
          children: [
            {
              path: 'test-end',
              element: <TestEndPage />,
            },
          ],
        },

        {
          path: 'pet-projects',
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
        },

        {
          path: 'leader-board',
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
        },

        {
          path: 'vacancies',
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
        },

        {
          path: 'profile',
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
        },

        {
          path: 'settings',
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
        },
        {
          path: 'feedback',
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
          element: (
            <MainWrapper
              showSidebar={true}
              showHeader={true}
              isTestingPage={false}
            >
              <UnderDevelopmentPage />
            </MainWrapper>
          ),
        },
      ],
    },
    { path: '*', element: <h1>404 Not Found</h1> },
  ];
  const routing = useRoutes(routes);

  return routing;
};
