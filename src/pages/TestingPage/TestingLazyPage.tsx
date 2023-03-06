import { lazy } from 'react';

const LazyTestingPage = lazy(() => import('./TestingPage'));


const TestingLazyPage = () => <LazyTestingPage/>;

export default TestingLazyPage;