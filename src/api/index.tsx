import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.sufle.az/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

export { getAllVacancies } from './vacancy';
export { getAllShops, getMainShop } from './shop';
export { getMainCategories } from './category';
export { getProductDetails, getAllProducts, getProductsByCategory } from './product';
