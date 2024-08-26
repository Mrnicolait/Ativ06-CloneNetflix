
import axios from 'axios';

const API_KEY = '27d4e8471c56718131736ce12e12b212';
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});