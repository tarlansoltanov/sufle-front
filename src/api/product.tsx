import instance from './index';

import { IProduct, IPaginatedProducts, ICategory, IFilterProps, IPaginationProps } from '../types';

const getProductDetails = async (id: number): Promise<IProduct> => {
  try {
    const resp = await instance.get(`product/${id}`);
    return resp.data as IProduct;
  } catch (error) {
    throw error;
  }
};

export { getProductDetails };

const getAllProducts = async ({ page, limit }: IPaginationProps): Promise<IPaginatedProducts> => {
  try {
    const resp = await instance.get(
      `product?${limit ? `limit=${limit}` : ''}&${page ? `page=${page}` : ''}`
    );
    return resp.data as IPaginatedProducts;
  } catch (error) {
    throw error;
  }
};

export { getAllProducts };

const getProductsByCategory = async (
  { page, limit }: IPaginationProps,
  category: ICategory
): Promise<IPaginatedProducts> => {
  try {
    const resp = await instance.get(
      `product?${limit ? `limit=${limit}` : ''}&${page ? `page=${page}` : ''}&${
        category ? `category_id=${category.id}` : ''
      }`
    );
    return resp.data as IPaginatedProducts;
  } catch (error) {
    throw error;
  }
};

export { getProductsByCategory };

const getProductsByFilter = async (
  { page, limit }: IPaginationProps,
  { categories, minPrice, maxPrice, ordering }: IFilterProps
): Promise<IPaginatedProducts> => {
  try {
    const resp = await instance.get(
      `product?${limit ? `limit=${limit}` : ''}&${page ? `page=${page}` : ''}&${
        categories ? `category_id=${categories.join(',')}` : ''
      }&${minPrice ? `min_price=${minPrice}` : ''}&${maxPrice ? `max_price=${maxPrice}` : ''}&${
        ordering ? `ordering=${ordering}` : ''
      }`
    );
    return resp.data as IPaginatedProducts;
  } catch (error) {
    throw error;
  }
};

export { getProductsByFilter };
