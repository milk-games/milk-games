import Season from '@components/season/Season';
import { SeasonService } from '@utils/api-service';

const seasonLoader = async ({ params: { id } }) => {
  let data;
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
      },
    ],
  },
];
