
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ] //No colocamos el import CommonModule ya que no hace uso de directivas.
})


export class ContadorModule{

}