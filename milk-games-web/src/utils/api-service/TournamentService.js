import api from './config';

const baseUrl = 'tournament';

export default {
  get(id) {
    return api.get(baseUrl + '/' + id);
  },
};
