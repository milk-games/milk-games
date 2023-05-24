import api from './config';

const baseUrl = 'tournament';

export default {
  get(id) {
    return api.get(baseUrl + '/' + id);
  },

  getPageBySeason(season, page, size) {
    const params = new URLSearchParams({ season, page, size });
    return api.get(baseUrl + '?' + params.toString());
  },

  getAllTournaments() {
    return api.get(baseUrl + '/all');
  },
};
