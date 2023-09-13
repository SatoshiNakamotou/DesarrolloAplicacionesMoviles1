import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-button',
  templateUrl: './ingreso-button.component.html',
  styleUrls: ['./ingreso-button.component.scss'],
})
export class IngresoButtonComponent {
  @Input() username: string = ''; // Recibimos el valor del nombre de usuario desde CustomInputComponent
  @Input() password: string = '';

  constructor(private router: Router) {}

  login() {
    // Verificar si el usuario y la contraseña son correctos
    if (this.isValidUserAndPassword(this.username, this.password)) {

      // Redirigir al usuario al componente de inicio
      this.router.navigate(['/login']);
    } else {
      // Mostrar un mensaje de error si las credenciales son incorrectas 
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  isValidUserAndPassword(username: string, password: string): boolean {
    // Implementa tu lógica de validación aquí, comparando con las credenciales válidas en tu aplicación.
    // Retorna true si las credenciales son válidas, de lo contrario, false.
    // Ejemplo: return username === 'usuario_valido' && password === 'contraseña_valida';
    return username === 'pedro' && password === '7581';
  }
}
