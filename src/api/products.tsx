import instance from './index';

import { IProduct } from '../types';

const getProductDetails = async (id: number): Promise<IProduct> => {
  try {
    const resp = await instance.get(`product/${id}`);
    return resp.data as IProduct;
  } catch (error) {
    throw error;
  }
};

export { getProductDetails };
