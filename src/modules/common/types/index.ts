export type Img = { [key: string]: string };
export type Theme = 'dark' | 'light';
export type SocialList = SocialItem[];

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

export interface SocialItem {
  url: string;
  icon: JSX.Element;
}
export interface UserInfo {
  name: string;
  role: string;
  social: SocialList;
  avatarUrl: string;
  companyName: string;
  groupName: string;
  testsAmount: number;
}
