import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [ //Componentes que contiene este módulo.
        HeroeComponent,
        ListadoComponent
    ],
    //Cosas que quiero visibles afuera de este módulo:
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    //Contienen módulos
    imports: [
        CommonModule //Contiene directivas como ngIf, ngFor, entre otros.
    ]
})

export class HeroesModule{

}