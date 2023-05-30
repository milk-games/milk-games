import api from './config';

const baseUrl = '/players';

export default {
  getSelf() {
    return api.get(baseUrl + '/@me');
  },

  getAll() {
    return api.get(baseUrl);
  },

  get(id) {
    return api.get(baseUrl + '/' + id);
  },

  logout() {
    return api.get('/logout');
  },
};
