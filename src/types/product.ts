import ICategory from './category';
import IImage from './image';

export default interface IProduct {
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
