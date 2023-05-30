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
import Admin from '@components/admin/Admin';
import GameService from '@utils/api-service/GameService';
import { PlayerService } from '@utils/api-service';

const adminLoader = async () => {
  const [games, players] = await Promise.all([
    GameService.getAll(),
    PlayerService.getAll(),
  ]);

  return { games, players };
};

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      ...season,
      ...tournament,
      ...player,
      {
        path: '/admin',
        element: (
          <Auth isAdmin>
            <Admin />
          </Auth>
        ),
        loader: adminLoader,
      },
    ],
  },
]);
