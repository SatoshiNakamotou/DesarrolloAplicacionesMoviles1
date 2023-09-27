import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-button',
  templateUrl: './ingreso-button.component.html',
  styleUrls: ['./ingreso-button.component.scss'],
})
export class IngresoButtonComponent {
  @Input() username: string = '';
  @Input() password: string = '';

  constructor(private router: Router, private animationCtrl: AnimationController) {}

  async login() {
    // Realiza alguna lógica de validación aquí
    if (this.isValidUserAndPassword(this.username, this.password)) {
      // Aplica la animación de cambio de color y escala al botón antes de redirigir
      await this.animateButton();

      // Redirige al usuario al componente de inicio
      this.router.navigate(['/login']);
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  isValidUserAndPassword(username: string, password: string): boolean {
    // Implementa tu lógica de validación aquí
    return username === 'pedro' && password === '7581';
  }

  async animateButton() {
    const element = document.querySelector('.login-button'); // Obtener el elemento del botón

    if (element) {
      const animation: Animation = this.animationCtrl.create()
        .addElement(element)
        .duration(1000) // Duración de la animación en milisegundos (1 segundo)
        .iterations(1) // Número de veces que se ejecutará la animación (1 vez)
        .keyframes([
          { offset: 0, backgroundColor: 'var(--ion-color-primary)', transform: 'scale(1)' }, // Estado inicial
          { offset: 0.5, backgroundColor: 'var(--ion-color-secondary)', transform: 'scale(1.2)' }, // Escala y color intermedio
          { offset: 1, backgroundColor: 'var(--ion-color-tertiary)', transform: 'scale(1)' }, // Estado final
        ]);

      await animation.play(); // Reproducir la animación
    }
  }
}
