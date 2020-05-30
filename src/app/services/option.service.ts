import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PollOptionCreate } from '../models/poll-option-create.model';
import { Vote } from '../models/vote.model';
import { User } from '../models/user.model';
import { Page } from '../models/page.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private endpoint: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.endpoint = `${environment.apiUrl}/option`;
  }

  public createOption(option: PollOptionCreate) {
    return this.httpClient.post(`${this.endpoint}`, option);
  }

  public vote(vote: Vote) {
    return this.httpClient.post(`${this.endpoint}/vote`, vote);
  }

  public unvote() {
    return this.httpClient.delete(`${this.endpoint}/vote`);
  }

  public voters() {
    return this.httpClient.get<Page<User>>(`${this.endpoint}/voters`).pipe(
      map(response => {
        response.Items = response.Items.map(user => new User(user));
        return response;
      })
    );
  }
}
