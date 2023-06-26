export interface IFilterProps {
  categories: number[];
  minPrice: number;
  maxPrice: number;
  ordering: string;
}

export interface IPaginationProps {
  page?: number;
  limit?: number;
}
