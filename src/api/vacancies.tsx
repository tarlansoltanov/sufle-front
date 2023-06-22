import instance from './index';

import { IVacancy } from '../types';

const getAllVacancies = async (): Promise<IVacancy[] | null> => {
  try {
    const resp = await instance.get('vacancy');
    return resp.data as IVacancy[];
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default getAllVacancies;
