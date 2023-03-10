import { lazy } from 'react';

const LazyStudentNotificationsPage = lazy(
  () => import('./StudentNotificationsPage')
);

const StudentNotificationsLazyPage = () => <LazyStudentNotificationsPage />;

export default StudentNotificationsLazyPage;
