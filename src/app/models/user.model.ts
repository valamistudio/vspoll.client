import { Initializable } from './initializable.model';

export class User extends Initializable<User> {
  public Id: number;
  public FirstName: string;
  public LastName: string;
  public Username: string;
  public PhotoUrl: string;
}
