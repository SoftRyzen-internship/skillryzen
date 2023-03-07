import { lazy } from 'react';

const LazyTestEndPage = lazy(() => import('./TestEndPage'));

const TestEndLazyPage = () => <LazyTestEndPage />;

export default TestEndLazyPage;
