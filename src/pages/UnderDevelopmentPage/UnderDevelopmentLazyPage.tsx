import { lazy } from 'react';

const LazyUnderDevelopmentPage = lazy(() => import('./UnderDevelopmentPage'));

const UnderDevelopmentLazyPage = () => <LazyUnderDevelopmentPage />;

export default UnderDevelopmentLazyPage;
