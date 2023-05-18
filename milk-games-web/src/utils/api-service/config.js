/**
 * @typedef {import("axios/index.d").AxiosInstance} AxiosInstance
 */

import axios from 'axios';

const apiUrl = 'http://' + process.env.REACT_APP_API_URL + '/';

/**
 * @type {AxiosInstance}
 */
const api = {
  ...axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
};

api.interceptors.response.use(response => response.data);

export default api;
