export interface MetaInterface {
  title?: string;
  keywords?: string;
  description?: string;
}
export interface TitleInterface {
  main: (string | JSX.Element)[];
  description: (string | JSX.Element)[];
}

export interface ProjectInterface {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
  };
}

export interface ProjectsInterface {
  projects: ProjectInterface[];
}
