import { PollOption } from './poll-option.model';

export class Poll {
  Id: string;
  Description: string;
  MultiVote: boolean;
  ShowVoters: boolean;
  AllowAdd: boolean;
  EndDate: Date;
  Options: PollOption[];
}
