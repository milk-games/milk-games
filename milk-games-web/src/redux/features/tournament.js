/**
 * @typedef {import("../../types/index.d").Tournament} Tournament
 */

import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'tournament',
  /**
   * @type {Tournament}
   */
  initialState: {
    matches: [],
    teams: [],
  },
  reducers: {
    set: (state = {}, action) => action.payload,
    updateMatch: (state = {}, action) => {},
  },
});

export const { set, updateMatch } = slice.actions;

export default slice.reducer;
