import { lazy } from 'react';

const LazyStudentCoinsPage = lazy(() => import('./StudentCoinsPage'));

const StudentCoinsLazyPage = () => <LazyStudentCoinsPage />;

export default StudentCoinsLazyPage;
