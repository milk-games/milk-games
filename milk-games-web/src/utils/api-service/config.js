/**
 * @typedef {import("axios/index.d").AxiosInstance} AxiosInstance
 */

import axios from 'axios';

const url = process.env.REACT_APP_API_URL + '/';

/**
 * @type {AxiosInstance}
 */
const api = {
  ...axios.create({
    baseURL: url + 'api',
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': process.env.REACT_APP_API_URL,
    },
  }),
};

/**
 * @type {AxiosInstance}
 */
const auth = {
  ...axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': process.env.REACT_APP_API_URL,
    },
  }),
};

api.interceptors.response.use(
  response => response.data,
  err => console.log({ err: err.toJSON() })
);

export default api;

export { api, auth };
