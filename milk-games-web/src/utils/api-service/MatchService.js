/**
 * @typedef {import("@types/index.d").Match} Match
 */

import api from './config';

const baseUrl = 'match';

export default {
  get(id) {
    return api.get(baseUrl + '/' + id);
  },

  /**
   *
   * @param {Match} match
   */
  update(match) {
    let tournamentId = match.details.tournamentId;
    return api.patch(baseUrl + '/');
  },
};
