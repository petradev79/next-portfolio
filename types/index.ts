export interface MetaInterface {
  title?: string;
  keywords?: string;
  description?: string;
}

export interface ProjectInterface {
  _id: string;
  title: string;
  summary: string;
  slug: {
    current: string;
  };
  imageCard: {
    asset: {
      _ref: string;
    };
  };
  imageSection: {
    asset: {
      _ref: string;
    };
  };
  destination: string;
  website: string;
  tags: TagInterface[];
}

interface TagInterface {
  _id: string;
  title: string;
  source: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}
