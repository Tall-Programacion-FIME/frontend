export type BookModel = {
  name: string;
  author: string;
  cover_url: string;
  price: number;
  id: number;
  owner_id: number;
};

export type BookUploadModel = {
  name: string;
  author: string;
  cover: File;
  price: string;
};

export type BookAPIResponse = {
  items: BookModel[];
  total: number;
  page: number;
  size: number;
};

export type BookUpdateModel = {
  name: string;
  author: string;
  price: number;
};
