import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const LoginPage = lazy(() => import('@modules/pages/LoginPage/LoginPage'))
const RegisterPage = lazy(
  () => import('@modules/pages/RegisterPage/RegisterPage')
)
const StudentPage = lazy(() => import('@modules/pages/StudentPage/StudentPage'))
const CompanyPage = lazy(() => import('@modules/pages/CompanyPage/CompanyPage'))
const TestsPage = lazy(() => import('@modules/pages/TestsPage/TestsPage'))

const routes = [
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <LoginPage /> },
  { path: '/student', element: <StudentPage /> },
  { path: '/company', element: <CompanyPage /> },
  { path: '/tests', element: <TestsPage /> },
  { path: '*', element: <h1>404 Not Found</h1> },
]

export const AppRoutes = () => {
  const routing = useRoutes(routes)

  return routing
}
