import instance from './index';

import { IShop } from '../types';

const getAllShops = async (): Promise<IShop[] | null> => {
  try {
    const resp = await instance.get('shop');
    return resp.data as IShop[];
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default getAllShops;