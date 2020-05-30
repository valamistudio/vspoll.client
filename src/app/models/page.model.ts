export abstract class Page<T> {
  Size: number;
  Number: number;
  TotalItems: number;
  TotalPages: number;
  Items: T[];
}
