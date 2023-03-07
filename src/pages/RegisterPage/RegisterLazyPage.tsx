import { lazy } from 'react';

const LazyRegisterPage = lazy(() => import('./RegisterPage'));

const RegisterLazyPage = () => <LazyRegisterPage />;

export default RegisterLazyPage;
