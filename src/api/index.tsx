import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.sufle.az/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

export { getAllVacancies } from './vacancies';
export { getAllShops, getMainShop } from './shops';
