import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PollCreate } from '../models/poll-create.model';
import { Poll } from '../models/poll';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private endpoint: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.endpoint = `${environment.apiUrl}/poll`;
  }

  public get(id: string) {
    return this.httpClient.get<Poll>(`${this.endpoint}/${id}`);
  }

  public create(poll: PollCreate) {
    return this.httpClient.post(`${this.endpoint}`, poll);
  }
}
