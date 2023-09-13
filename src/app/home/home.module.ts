import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

// Importa tu componente personalizado
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { CustomPasswordInputComponent } from '../custom-password-input/custom-password-input.component';
import { ForgotPasswordButtonComponent } from '../forgot-password-button/forgot-password-button.component';
import { IngresoButtonComponent } from '../ingreso-button/ingreso-button.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    // Agrega tu componente personalizado a las declaraciones
    CustomInputComponent,
    CustomPasswordInputComponent,
    ForgotPasswordButtonComponent,
    IngresoButtonComponent
  ]
})
export class HomePageModule {}
