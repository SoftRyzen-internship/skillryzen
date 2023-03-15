export type Img = { [key: string]: string };
export type Theme = 'dark' | 'light';
export type SocialName =
  | 'telegram'
  | 'linkedin'
  | 'github'
  | 'discord'
  | 'behance'
  | 'dribble';

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
  name: SocialName;
  url: string;
}
export interface UserAchievements {
  score?: string;
  coins?: number;
  time?: string;
}
export interface UserTests {
  id: number;
  title: string;
  author: string;
  text?: string;
  fields?: string[];
  number?: number;
  time?: number;
  testStatus?: string;
  wasStarted?: boolean;
  nextRetakeDate?: Date | string;
}
export interface UserInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  social: UserSocial[];
  achievements: UserAchievements;
  avatarUrl: string;
  company: {
    name: string;
    avatarUrl: string;
  };
  groupName: string;
  testsAmount: number;
  tests: UserTests[];
}
