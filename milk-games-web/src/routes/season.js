import Season from '@components/season/Season';
import Tournaments from '@components/tournament/Tournaments';
import { SeasonService } from '@utils/api-service';

const seasonLoader = async ({ params: { id } }) => {
  let data;
  console.log('season loader');
  if (!id) {
    data = await SeasonService.getCurrent();
  } else {
    data = await SeasonService.get(id);
  }
  return data || null;
};

export default [
  {
    path: '/season',
    element: <Season />,
    loader: seasonLoader,
    children: [
      {
        path: '/season/:id',
        element: <Season />,
        loader: seasonLoader,
        children: [
          {
            path: '/season/:id/tournaments',
            element: <Tournaments />,
            loader: async ({ params }) => {
              console.log('touranment loader');
              return await SeasonService.getTournaments(params.id);
            },
          },
        ],
      },
    ],
  },
];
