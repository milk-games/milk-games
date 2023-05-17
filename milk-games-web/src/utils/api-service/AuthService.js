import api from './config';

const baseUrl = 'auth';

export default {
  auth(code) {
    return api.post(baseUrl + '/callback', code);
  },
};
