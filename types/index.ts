export interface MetaInterface {
  title?: string;
  keywords?: string;
  description?: string;
}
export interface TitleInterface {
  main: (string | JSX.Element)[];
  description: (string | JSX.Element)[];
}
