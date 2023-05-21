import Auth from '@components/auth/Auth';
import NotFound from '@components/common/NotFound';
import Player from '@components/player/Player';
import Tournament from '@components/tournament/Tournament';
import { createBrowserRouter } from 'react-router-dom';

import player from './player';
import tournament from './tournament';

import Playground from '@components/Playground';
import Season from '@components/season/Season';

export default createBrowserRouter([
  {
    path: '/',
    element: <Playground />,
  },
  {
    path: '/season',
    element: <Auth children={<Season />} />,
  },

  ...tournament,
  ...player,
]);
