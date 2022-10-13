import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ["Spiderman","Ironman","Hulk","Thor","Capitan América"];

  heroeDelete: string = "";
  

  borrarHeroe(){
    //this.heroes.pop(); Borrar el último elemento del arreglo.
    //shift(): Borra el primer elemento y lo retorna. Devuelve string o undefined

    this.heroeDelete = this.heroes.shift() || ""; //Regrese el string con el heroe o uno vacio.

  }

}
