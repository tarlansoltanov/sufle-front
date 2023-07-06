export interface ICategory {
  id: number;
  name: string;
  logo?: {
    white: string;
    grey: string;
    red: string;
  };
  main_category?: ICategory;
  sub_categories?: ICategory[];
  created_at: string;
}

export interface IMainCategory {
  id: number;
  name: string;
  logo: {
    white: string;
    grey: string;
    red: string;
  };
  sub_categories: ISubCategory[];
  created_at: string;
}

export interface ISubCategory {
  id: number;
  name: string;
  main_category?: IMainCategory;
  created_at: string;
}
