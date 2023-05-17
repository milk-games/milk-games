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
    headers: {
      'Access-Control-Allow-Origin': '*',
      'X-Requested-With': 'XMLHttpRequest',
    },
  }),
};

api.interceptors.response.use(response => response.data);

export default api;
