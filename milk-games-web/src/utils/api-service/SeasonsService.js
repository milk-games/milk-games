import api from './config';

const baseUrl = 'seasons';

export default {
  getAllSeasons() {
    return api.get(baseUrl);
  },

};
