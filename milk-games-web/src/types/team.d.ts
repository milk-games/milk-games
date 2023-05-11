import Player from './player';
import { Tournament } from './tournament';

interface Team {
  id: number;
  tournament: Tournament;
  name: string;
  maxSize: number;
  players: Player;
}

export default Team;
