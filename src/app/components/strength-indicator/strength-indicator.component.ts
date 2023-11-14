import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrengthCategory } from '../../types/types';
import { PasswordStrengthCategory } from '../../interfaces/password-strength-category';

@Component({
  selector: 'app-strength-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-indicator.component.html',
  styleUrl: './strength-indicator.component.scss'
})
export class StrengthIndicatorComponent implements OnChanges {
  @Input() strength: StrengthCategory = 'empty';
  colorMap: PasswordStrengthCategory = {
    empty: ['gray', 'gray', 'gray'],
    short: ['red', 'red', 'red'],
    easy: ['red', 'gray', 'gray'],
    medium: ['yellow', 'yellow', 'gray'],
    strong: ['green', 'green', 'green'],
  };
  strengthColor = this.colorMap['empty'];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['strength'] && changes['strength'].currentValue) {
      const strengthChange = changes['strength'] as { currentValue: StrengthCategory };
      this.strengthColor = this.colorMap[strengthChange.currentValue];
    }
  }
}
