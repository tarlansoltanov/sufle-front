import { ICategory } from './category';

export default interface IAdvert {
  id: number;
  title: string;
  photo: string;
  category: ICategory;
  modified_at: string;
  created_at: string;
}
