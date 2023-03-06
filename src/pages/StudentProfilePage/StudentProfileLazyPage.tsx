import { lazy } from 'react';

const LazyStudentProfilePage = lazy(() => import('./StudentProfilePage'));


const StudentProfileLazyPage = () => <LazyStudentProfilePage/>;

export default StudentProfileLazyPage;