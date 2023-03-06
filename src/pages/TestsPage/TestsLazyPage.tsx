import { lazy } from 'react';

const LazyTestsPage = lazy(() => import('./TestsPage'))


const TestsLazyPage = () => <LazyTestsPage/>;

export default TestsLazyPage;