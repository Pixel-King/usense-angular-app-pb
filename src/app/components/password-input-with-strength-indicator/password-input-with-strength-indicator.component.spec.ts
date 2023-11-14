import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputWithStrengthIndicatorComponent } from './password-input-with-strength-indicator.component';

describe('PasswordInputWithStrengthIndicatorComponent', () => {
  let component: PasswordInputWithStrengthIndicatorComponent;
  let fixture: ComponentFixture<PasswordInputWithStrengthIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInputWithStrengthIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordInputWithStrengthIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
