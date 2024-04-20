import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'http://localhost:8081/api',
  headers: {
    Accept: 'application/json',
  },
});
