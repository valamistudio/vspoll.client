export abstract class Initializable<T> {
  constructor(data?: Partial<T>) {
    Object.assign(this, data);
  }
}
