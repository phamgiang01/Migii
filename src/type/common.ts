export interface IRouterConfig {
  name: string;
  key: string;
  route: string;
  component: JSX.Element;
}


export interface IRoadMap {
  examDay: string,
  title: string,
  target?: string,
  isSpecial?: boolean,
  process?: number
}

export interface IQuestion {
  id: number,
  content: string,
  images: string[],
  answerCorrect: string
}