import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() parentForm!: FormGroup;
  @Input() controlName!: string;
  passwordValue: string = '';

  constructor () {}

  private onChange: () => void = () => {
    this.parentForm.get(this.controlName)?.setValue(this.passwordValue);
  };
  private onTouched: () => void = () => {};

  writeValue(): void {}

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(): void {
    if (this.parentForm && this.controlName) {
      this.onChange();
      this.onTouched();
    }
  }
}
