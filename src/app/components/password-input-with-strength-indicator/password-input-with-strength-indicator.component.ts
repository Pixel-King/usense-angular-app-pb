import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { PasswordStrengthService } from '../../services/password-strength.service';
import { StrengthIndicatorComponent } from '../strength-indicator/strength-indicator.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { StrengthCategory } from '../../types/types';

@Component({
  selector: 'app-password-input-with-strength-indicator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StrengthIndicatorComponent,
    PasswordInputComponent,
  ],
  templateUrl: './password-input-with-strength-indicator.component.html',
  styleUrl: './password-input-with-strength-indicator.component.scss'
})
export class PasswordInputWithStrengthIndicatorComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() controlName!: string;
  strength: StrengthCategory = 'empty';

  constructor(private pss: PasswordStrengthService) {}

  ngOnInit(): void {
    this.parentForm.get(this.controlName)?.valueChanges.subscribe(value => {
      this.strength = this.pss.check(value);
    });
  }
}
