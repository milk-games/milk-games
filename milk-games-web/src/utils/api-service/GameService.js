import api from './config';

const baseUrl = '/games';

export default {
  getAll() {
    return api.get(baseUrl + '/');
  },

  get(id) {
    return api.get(baseUrl + '/' + id);
  },
};
