import { lazy } from 'react';

const LazyNotificationsPage = lazy(() => import('./NotificationsPage'));

const NotificationsLazyPage = () => <LazyNotificationsPage />;

export default NotificationsLazyPage;
