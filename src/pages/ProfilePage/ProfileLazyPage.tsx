import { lazy } from 'react';

const LazyProfilePage = lazy(() => import('./ProfilePage'));

const ProfileLazyPage = () => <LazyProfilePage />;

export default ProfileLazyPage;
