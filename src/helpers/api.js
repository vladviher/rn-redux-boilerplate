import { create } from 'apisauce';

const API_KEY = '45e333a4-7498-4bc8-9065-24c01d26d962';
export const BASE_URL = 'https://api.thecatapi.com/v1';

export const baseApi = create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
});

export const baseeApiErrorHandler = error => {
  // eslint-disable-next-line
  console.log('--- API ERROR ---', error);
};

export const getErrorMessage = errorObj => errorObj ? errorObj.problem : 'unknown issue';
