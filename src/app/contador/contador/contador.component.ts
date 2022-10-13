/* Crear componente manualmente.
    1. clase
    2. Importar el decorador
    3. Escribir el decorador.
*/

// De @angular/core, importeme Component.
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <!-- Notas:
        - Title: propiedad de la clase en app.component.ts 
        - Con las doble llaves podemos escribir código js.
    -->

    <!-- <p> Ejemplo: {{1+1}} </p>-->

    <h1> {{titulo}} </h1>

    <h3>La base es: <strong> {{base}} </strong></h3>

    <!-- Contador App:
        - Los eventos se colocan entre () = Aquí va Typescript
        Lo lógica despues del = en el template (HTML), no se aconseja, debería ser en el componente.
    -->

    <!-- Cada vez que le de clic en el botón, llame a acumular de component.ts 
    acumular() recibe un valor numérico.
    -->
    <button (click)=" acumular(base) "> +{{base}} </button>

    <span> {{numero}} </span>

    <button (click)=" acumular(-base) "> -{{base}} </button>
    <!-- <button (click)=" numero = numero - 1; "> -1 </button>-->
        `
    })


//export: queremos usarla en otros archivos.
export class ContadorComponent {
    //También podemos colocar modificadores de acceso
    titulo: string = 'Contador App';
    numero: number = 10;

    base: number = 5;

    //Métodos:

    //Sirve para sumar o restar, recibe un 1 o -1
    acumular( valor: number ){
        this.numero += valor;
    }
}