import Auth from '@components/auth/Auth';
import NotFound from '@components/common/NotFound';
import Player from '@components/player/Player';
import Tournament from '@components/tournament/Tournament';
import { createBrowserRouter } from 'react-router-dom';

import player from './player';
import tournament from './tournament';
import season from './season';
import Playground from '@components/Playground';

export default createBrowserRouter([
  {
    path: '/',
    element: <Playground />,
  },

  ...season,
  ...tournament,
  ...player,
]);
