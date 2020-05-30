import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public minLengthArray(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min) {
        return null;
      }
      return { minLengthArray: { valid: false } };
    };
  }
}
