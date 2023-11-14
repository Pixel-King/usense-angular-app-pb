import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordInputWithStrengthIndicatorComponent } from '../password-input-with-strength-indicator/password-input-with-strength-indicator.component';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordInputWithStrengthIndicatorComponent,
  ],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.scss'
})
export class PasswordFormComponent {
  passwordForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: [''],
    });
  }
}
