import Auth from '@components/auth/Auth';
import NotFound from '@components/common/NotFound';
import Player from '@components/player/Player';
import Tournament from '@components/tournament/Tournament';
import { createBrowserRouter } from 'react-router-dom';

import player from './player';
import tournament from './tournament';
import season from './season';
import Root from '@components/Root';
import Landing from '@components/Landing';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      ...season,
      ...tournament,
      ...player,
    ],
  },
]);
