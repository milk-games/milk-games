import { Tournament } from './tournament';

interface MatchDetails {
  round: number;
  matchNum: number;
  tournamentId: number;
}

interface Match {
  details: MatchDetails;
  round: number;
  matchNum: number;
  tournamentId: number;
  team1: Team;
  team2: Team;
  team1Points: number;
  team2Points: number;
  finished: boolean;
  winningTeam: number;
  stats: String;
}

export default Match;
