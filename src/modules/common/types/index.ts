export type Img = { [key: string]: string };

export interface IAuth {
  role?: string;
  step?: number;
  setStep?: (step: number) => void;
  setRole?: (role: string) => void;
}

export interface Icons {
  [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
