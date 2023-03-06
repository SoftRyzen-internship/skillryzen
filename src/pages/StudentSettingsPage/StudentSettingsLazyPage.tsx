import { lazy } from 'react';

const LazyStudentSettingsPage = lazy(() => import('./StudentSettingsPage'));


const StudentSettingsLazyPage = () =>  <LazyStudentSettingsPage/>;

export default StudentSettingsLazyPage;