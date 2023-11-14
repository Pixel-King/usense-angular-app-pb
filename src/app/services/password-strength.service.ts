import { Injectable } from '@angular/core';
import { StrengthCategory } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  constructor() { }

  check(password: string): StrengthCategory {
    const length: number = password.length;

    const hasLetters = Number(/[a-zA-Z]/.test(password));
    const hasDigits = Number(/\d/.test(password));
    const hasSymbols = Number(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password));
    const score = hasLetters + hasDigits + hasSymbols;

    if (!length) {
      return 'empty';
    }

    if (length < 8) {
      return 'short';
    }

    return score == 3 ? 'strong': score == 2 ? 'medium' : 'easy'
  }
}
