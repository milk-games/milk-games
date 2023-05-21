import Auth from '@components/auth/Auth';
import Player from '@components/player/Player';
import { PlayerService } from '@utils/api-service';

const playerLoader = async ({ params: { id } }) => {
  let data;
  if (!id) {
    data = await PlayerService.getSelf();
  } else {
    data = await PlayerService.get(id);
  }
  return data || null;
};

export default [
  {
    path: '/players',
    element: <Auth children={<Player />} />,
    loader: playerLoader,
  },
  {
    path: '/player',
    element: <Auth children={<Player />} />,
    loader: playerLoader,
    children: [
      {
        path: '/player/:id',
        element: <Auth children={<Player />} />,
        loader: playerLoader,
      },
    ],
  },
];
