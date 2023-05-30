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

const tournamentsLoader = async () => {
  let data;
  console.log('tournaments loader');
  data = await TournamentService.getAllTournaments(); 
  return data || null;
};

export default [
  {
    path: '/tournaments/:id',
    element: <Tournament />,
    loader: tournamentLoader,
  },
  {
    path: '/tournaments',
    element: <Tournaments />,
    loader: tournamentsLoader,
  },
];
