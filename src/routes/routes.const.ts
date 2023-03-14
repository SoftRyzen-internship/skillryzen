type AllowedPath = string;

interface Routes {
  [key: string]: AllowedPath;
}

export const ROUTES: Routes = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  CERTIFICATION: '/certification',
  PETPROJECTS: '/pet-projects',
  LEADERBOARD: '/leader-board',
  VACANCIES: '/vacancies',
  PROFILE: '/profile',
  PROFILE_SETTINGS: '/profile-settings',
  NOTIFICATIONS: '/notifications',
  COINS: '/coins',
  FEEDBACK: '/feedback',
  TEAM: '/team',
  TESTING: '/testing',
  TEST_END: '/testing/test-end',
  INVITE_MODULE: '/invite-module',
  COMPANY_PROFILE: '/company-profile',
  COMPANY_SETTINGS: '/company-settings',
};
