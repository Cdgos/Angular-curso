import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

// MODULO PRINCIPAL

@NgModule({
  declarations: [
    //Componentes que se están utilizando
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule, //Modulo heroes que contiene 2 componentes.
    ContadorModule //Modulo contador
  ],
  providers: [],
  bootstrap: [AppComponent] //Componente principal, el primero que se lanza.
})
export class AppModule { }
