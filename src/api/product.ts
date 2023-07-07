import instance from './index';

import {
  IProduct,
  IPaginatedProducts,
  ICategory,
  IFilterProps,
  IPromoProps,
  IPaginationProps,
  IWeight,
} from '../types';

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
  category: ICategory | null
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
  { categories, minPrice, maxPrice, ordering, search }: IFilterProps
): Promise<IPaginatedProducts> => {
  try {
    const resp = await instance.get(
      `product?${limit ? `limit=${limit}` : ''}&${page ? `page=${page}` : ''}&${
        categories ? `category_id=${categories.join(',')}` : ''
      }&${minPrice ? `min_price=${minPrice}` : ''}&${maxPrice ? `max_price=${maxPrice}` : ''}&${
        ordering ? `ordering=${ordering}` : ''
      }&${search ? `search=${search}` : ''}`
    );
    return resp.data as IPaginatedProducts;
  } catch (error) {
    throw error;
  }
};

export { getProductsByFilter };

const getProductsByPromo = async (
  { page, limit }: IPaginationProps,
  { isNew, discount }: IPromoProps
): Promise<IPaginatedProducts> => {
  try {
    const resp = await instance.get(
      `product?${limit ? `limit=${limit}` : ''}&${page ? `page=${page}` : ''}&${
        isNew ? 'is_new=true' : ''
      }&${discount ? 'discount=true' : ''}`
    );
    return resp.data as IPaginatedProducts;
  } catch (error) {
    throw error;
  }
};

export { getProductsByPromo };

const getWeights = async (): Promise<IWeight[]> => {
  try {
    const resp = await instance.get('weight');
    return resp.data as IWeight[];
  } catch (error) {
    throw error;
  }
};

export { getWeights };
