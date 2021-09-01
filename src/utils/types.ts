export type Image = {
  id: number;
  url: string;
  user_tags: Tag[];
  tags: Tag[];
};

export type Tag = {
  id: number;
  tag: string;
};

export type LaravelError = {
  errors: {
    [key: string]: string[];
  };
  message: string;
};
