import api from './config';

const baseUrl = '/player';

export default {
  getSelf() {
    return api.get(baseUrl + '/@me');
  },
};
