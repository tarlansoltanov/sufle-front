export default interface ICategory {
  id: number;
  name: string;
  logo?: string;
  main_category?: ICategory;
  sub_categories?: ICategory[];
  created_at: string;
}
