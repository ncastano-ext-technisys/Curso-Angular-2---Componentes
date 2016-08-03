//our root app component
import {Component} from '@angular/core'
import {EstudiantesComponent} from './estudiantes.component'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <estudiantes [mi_universidad]="laUniversidad"(seleccionado)="mostrarEstudiante($event)"></estudiantes>
      
    </div>
  `,
  /* Se define la propiedad =>[universidad] que corresponde a la propiedad 
  definida en el estudiantes.components como @Input() universidad = String;*/
  //el evento "seleccionado" definido en componente EstudiantesComponent ejecuta una funcion
  
  directives: [EstudiantesComponent]
})
export class App {
  laUniversidad="UBA";
  
  mostrarEstudiante(evento):void{
    console.log(evento.nombre);
  };
  
  constructor() {
    this.name = 'Angular2 (Release Candidate)'
  }
}