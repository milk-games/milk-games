import Match from './match';
import { Season } from './season';

interface Tournament {
  id: number;
  name: string;
  eliminationType: string;
  teamSize: number;
  teamLimit: number;
  prizePool: number;
  finished: boolean;
  startDate: Date;
  endDate: Date;
  season: Season;
  matches: Match[];
  teams: Team[];
}

export default Tournament;
