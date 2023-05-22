import Tournament from '@components/tournament/Tournament';
import Tournaments from '@components/tournament/Tournaments';
import { TournamentService } from '@utils/api-service';

const tournamentLoader = async ({ params: { id } }) => {
  let data;
  if (!id) {
  } else {
    data = await TournamentService.get(id);
    console.log(data);
  }
  return data || null;
};

export default [
  {
    path: '/tournament/:id',
    element: <Tournament />,
    loader: tournamentLoader,
  },
];
