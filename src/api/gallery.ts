import instance from './index';

import { IGallery } from '../types';

const getGalleryItems = async (type: 'image' | 'video' | null): Promise<IGallery[]> => {
  try {
    const resp = await instance.get(`gallery?${type ? `type=${type}` : ''}`);
    return resp.data as IGallery[];
  } catch (error) {
    throw error;
  }
};

export { getGalleryItems };
