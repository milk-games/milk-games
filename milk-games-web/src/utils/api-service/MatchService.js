/**
 * @typedef {import("@types/index.d").Match} Match
 */

import api from './config';

const baseUrl = 'tournament/{tournamentId}/matches';

export default {
  getTournamentMatches(id) {
    let url = baseUrl.replace('{tournamentId}', id);
    return api.get(url);
  },

  /**
   *
   * @param {Match} match
   */
  update(match) {
    let tournamentId = match.details.tournamentId;
    let url = baseUrl.replace('{tournamentId}', tournamentId);
    return api.patch(url, match);
  },
};
