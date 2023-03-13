import { lazy } from 'react';

const LazyCoinsPage = lazy(() => import('./CoinsPage'));

const CoinsLazyPage = () => <LazyCoinsPage />;

export default CoinsLazyPage;
