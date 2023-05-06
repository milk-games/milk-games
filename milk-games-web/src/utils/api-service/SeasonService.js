import api from './config';

const baseUrl = 'season';

export default {
  getCurrent() {
    return api.get(baseUrl);
  },

  //   getAll(page, size) {
  //     const params = new URLSearchParams({ page, size });
  //     return api.get(baseUrl + '?' + params.toString());
  //   },

  //   create(nounData) {
  //     return api.post(baseUrl + '/create', nounData);
  //   },
};
