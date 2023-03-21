import { lazy } from 'react';

const LazyLeaderboard = lazy(() => import('./LeaderboardPage'));

const LeaderboardLazyPage = () => <LazyLeaderboard />;

export default LeaderboardLazyPage;
