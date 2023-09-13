import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = ''; // Agrega la propiedad username aquí
  password: string = ''; // Agrega la propiedad password aquí

  constructor() {}
}
