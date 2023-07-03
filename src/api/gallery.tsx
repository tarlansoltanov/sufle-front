import instance from './index';

import { IGallery } from '../types';

const getGalleryItems = async (): Promise<IGallery[]> => {
  try {
    const resp = await instance.get(`gallery`);
    return resp.data as IGallery[];
  } catch (error) {
    throw error;
  }
};

export { getGalleryItems };
