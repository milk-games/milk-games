import Auth from '@components/auth/Auth';
import NotFound from '@components/common/NotFound';
import Player from '@components/player/Player';
import Tournament from '@components/tournament/Tournament';
import { createBrowserRouter } from 'react-router-dom';

import player from './player';
import Landing from 'Landing';
import Playground from '@components/Playground';

export default createBrowserRouter([
  {
    path: '/',
    element: <Playground />,
  },
  {
    path: '/auth',
    com: <Auth />,
  },
  {
    path: '/tournament',
    element: <Auth children={<Tournament />} />,
  },

  ...player,
]);
