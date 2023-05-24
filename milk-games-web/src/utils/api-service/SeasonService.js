import api from './config';

const baseUrl = 'season';

export default {
  getCurrent() {
    return api.get(baseUrl);
  },

  get(id) {
    return api.get(baseUrl + '/' + id);
  },

  getTournaments(id) {
    return api.get(baseUrl + '/' + id + '/tournaments');
  },

  getAllSeasons() {
    return api.get(baseUrl + '/all');
  },
};
