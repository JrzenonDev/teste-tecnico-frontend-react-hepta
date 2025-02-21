import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_OPEN_METEO,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000,
});
