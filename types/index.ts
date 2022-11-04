export interface TitleInterface {
  title: (string | JSX.Element)[];
  description: (string | JSX.Element)[];
}

export interface SkillInterface {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface HeaderPropsInterface {
  title: TitleInterface;
  skills?: SkillInterface[];
  image?: string;
}
