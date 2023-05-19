import api from './config';

const baseUrl = '/player';

export default {
  getSelf() {
    return api.get(baseUrl + '/@me');
  },

  get(id) {
    return api.get(baseUrl + '/' + id);
  },

  logout() {
    return api.get('/logout');
  },
};
