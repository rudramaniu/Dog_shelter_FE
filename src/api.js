import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://dog-shelter-backend.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});