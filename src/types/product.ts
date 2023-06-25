import { ICategory, IImage } from '.';

export interface IProduct {
  id: number;
  name: string;
  category: ICategory;
  images: IImage[];
  ingredients: string;
  price: number;
  discount: number;
  is_new: boolean;
  created_at: string;
}

export interface IPaginatedProducts {
  count: number;
  next: string;
  previous: string;
  results: IProduct[];
}
