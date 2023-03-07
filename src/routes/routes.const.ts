type AllowedPath = string;

interface Routes {
  [key: string]: AllowedPath;
}

export const ROUTES: Routes = {
  LOGIN: '/login',
  REGISTER: '/register',
  STUDENT: '/student',
  DASHBOARD: '/student/dashboard',
  CERTIFICATION: '/student/certification',
  PETPROJECTS: '/student/pet-projects',
  LEADERBOARD: '/student/leader-board',
  VACANCIES: '/student/vacancies',
  PROFILE: '/student/profile',
  SETTINGS: '/student/settings',
  FEEDBACK: '/student/feedback',
  TEAM: '/student/team',
  TESTING: '/student/testing',
  TEST_END: '/student/testing/test-end',
  NOT_FOUND: '*',
};
