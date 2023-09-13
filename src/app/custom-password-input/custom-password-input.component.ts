import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-password-input',
  templateUrl: './custom-password-input.component.html',
  styleUrls: ['./custom-password-input.component.scss'],
})
export class CustomPasswordInputComponent {
  @Output() passwordChanged = new EventEmitter<string>();
  password: string = '';

  onPasswordChange(password: string) {
    this.passwordChanged.emit(password);
  }
}

