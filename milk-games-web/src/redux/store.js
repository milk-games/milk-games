import { configureStore } from '@reduxjs/toolkit';
import tournament from './features/tournament';

export const store = configureStore({
  reducer: {
    tournament,
  },
});
