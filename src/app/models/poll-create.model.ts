export class PollCreate {
  Description: string;
  MultiVote: boolean;
  ShowVoters: boolean;
  AllowAdd: boolean;
  EndDate: Date;
  Options: string[];
}
