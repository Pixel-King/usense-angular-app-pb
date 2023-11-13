import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule,  } from '@angular/forms';

interface PasswordStrengthCategory {
  empty: string[];
  short: string[];
  easy: string[];
  medium: string[];
  strong: string[];
}

type StrengthCategoryKey = keyof PasswordStrengthCategory;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usense-angular';
  password = new FormControl('');
  strengthColor = ['gray', 'gray', 'gray'];

  checkPasswordStrength() {
    const password = this.password.value || '';
    const length: number = password.length;

    const hasLetters = Number(/[a-zA-Z]/.test(password));
    const hasDigits = Number(/\d/.test(password));
    const hasSymbols = Number(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password));
    const score = hasLetters + hasDigits + hasSymbols;

    if (!length) {
      console.log('empty! The length is ' + length)
      this.updateStrengthColor('empty');
      return
    }

    if (length < 8) {
      console.log('short! The length is ' + length)
      this.updateStrengthColor('short');
      return
    }

    this.updateStrengthColor(score == 3 ? 'strong': score == 2 ? 'medium' : 'easy');
  }

  updateStrengthColor(strength: StrengthCategoryKey) {
    const colorMap: PasswordStrengthCategory = {
      empty: ['gray', 'gray', 'gray'],
      short: ['red', 'red', 'red'],
      easy: ['red', 'gray', 'gray'],
      medium: ['yellow', 'yellow', 'gray'],
      strong: ['green', 'green', 'green'],
    };

    this.strengthColor = colorMap[strength];
  }
}
