import axios from 'axios';

const apiUrl = 'http://' + process.env.REACT_APP_API_URL + '/';

const api = {
  ...axios.create({
    baseURL: apiUrl,
    headers: { 'Access-Control-Allow-Origin': '*' },
  }),
};

api.interceptors.response.use(response => response.data);

export default api;
