export interface IFilterProps {
  categories: number[];
  minPrice: number;
  maxPrice: number;
  ordering: string;
  search: string;
}

export interface IPaginationProps {
  page?: number;
  limit?: number;
}
