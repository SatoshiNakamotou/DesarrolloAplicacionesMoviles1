import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Output() usernameChanged = new EventEmitter<string>(); // Creamos un evento de tipo EventEmitter

  username: string = '';

  onUsernameChange(username: string) {
    this.usernameChanged.emit(username); // Emitimos el valor del nombre de usuario cuando cambie
  }
}
