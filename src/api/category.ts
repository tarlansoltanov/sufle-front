import instance from './index';

import { IMainCategory } from '../types';

const getMainCategories = async (): Promise<IMainCategory[]> => {
  try {
    const resp = await instance.get(`category/main`);
    return resp.data as IMainCategory[];
  } catch (error) {
    throw error;
  }
};

export { getMainCategories };
