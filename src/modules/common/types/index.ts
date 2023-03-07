export type Img = { [key: string]: string };
export type Theme = 'dark' | 'light';

export interface IAuth {
  role?: string;
  step?: number;
  setStep?: (step: number) => void;
  setRole?: (role: string) => void;
}

export interface Icons {
  [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export interface IThemeContext {
  theme: Theme;
  setTheme: (action: Theme | ((prevState: Theme) => Theme)) => void;
}

export interface UserSocial {
  telegram: string;
  linkedin: string;
}
export interface UserAchievements {
  score: string;
  coins: number;
  time: string;
}
export interface UserTests {
  title: string;
  text: string;
  fields?: string[];
  number: number;
  time?: number;
}
export interface UserInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  social: UserSocial;
  achievements: UserAchievements;
  avatarUrl: string;
  companyName: string;
  groupName: string;
  testsAmount: number;
  tests: UserTests[];
}
