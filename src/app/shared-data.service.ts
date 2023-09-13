import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  // Agrega las propiedades de username y password al servicio
  username: string = '';
  password: string = '';

  constructor() {}
}
