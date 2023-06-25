import instance from './index';

import { IProduct, IPaginatedProducts } from '../types';

const getProductDetails = async (id: number): Promise<IProduct> => {
  try {
    const resp = await instance.get(`product/${id}`);
    return resp.data as IProduct;
  } catch (error) {
    throw error;
  }
};

export { getProductDetails };

interface IPaginationProps {
  page?: number;
  limit?: number;
}

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
