import { Tournament } from './tournament';

interface Season {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  tournaments: Tournament[];
}

export default Season;
