import instance from './index';

import { IAdvert } from '../types';

const getAdverts = async (): Promise<IAdvert[]> => {
  try {
    const resp = await instance.get(`advert`);
    return resp.data as IAdvert[];
  } catch (error) {
    throw error;
  }
};

export { getAdverts };
