import { Initializable } from './initializable.model';

export class Authentication extends Initializable<Authentication> {
  Id: number;
  FirstName: string;
  LastName: string;
  Username: string;
  PhotoUrl: string;
  AuthDate: number;
  Hash: string;
}
