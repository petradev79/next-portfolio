export interface MetaInterface {
  title?: string;
  keywords?: string;
  description?: string;
}

export interface ProjectInterface {
  _id: string;
  title: string;
  summary: string;
  description: string;
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
  imageGallery: ImageInterface[];
  destination: string;
  website: string;
  tags: TagInterface[];
}

export interface ImageInterface {
  asset: {
    _ref: string;
  };
  _key: string;
}

interface TagInterface {
  _id: string;
  title: string;
  source: string;
  summary: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}
