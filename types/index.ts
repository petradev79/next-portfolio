export interface MetaInterface {
  title?: string;
  keywords?: string;
  description?: string;
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
  destination: string;
  website: string;
  tags: string[];
}

export interface ProjectsInterface {
  projects: ProjectInterface[];
}
