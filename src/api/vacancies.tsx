import instance from './index';

import { IVacancy } from '../types/vacancy';

export const getAllVacancies = async (): Promise<IVacancy[] | null> => {
  try {
    const resp = await instance.get('vacancy');

    return resp.data as IVacancy[];
  } catch (error) {
    console.log(error);
  }
  return null;
};
