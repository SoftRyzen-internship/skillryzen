import { lazy } from 'react';

const LazyTestStartPage = lazy(() => import('./TestStartPage'))


const TestStartLazyPage = () => <LazyTestStartPage/>;

export default TestStartLazyPage;