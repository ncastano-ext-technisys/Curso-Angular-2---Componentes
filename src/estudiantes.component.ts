import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'estudiantes',
  template: `<h3>Lista de estudiantes</h3>
            {{titulo}}
            <ul>
              <li *ngFor="let estudiante of listaDeEstudiantes()">
                <span (click)="clickEnEstudiante($event)">{{estudiante}}</span>
              </li>
            </ul>`
})

export class EstudiantesComponent {
  titulo= "Este es el titulo de la lista de estudiantes";
  
  @Input('mi_universidad') universidad = String;
  /*El input sirve para abrir la propiedad y permitir que pueda ser usada desde otro 
  componente. Al input se le puede poner un alias si quisiera renombrarlo, pero de ser así
  también debería cambiarlo al momento de llamar a la propiedad [mi_universidad]*/
  
  @Output() seleccionado = new EventEmitter();
  /*El output permite comunicarse con los otros componentes que utilizan a este componente*/
  /*El EventEmitter indica que vamos a emitir un evento y este debe ser escuchado por el
  componente padre (en este caso app.ts)*/
  //Ahora "seleccionado" pasa a ser un evento nuevo.
  
  listaDeEstudiantes():Array<String>{
    if(this.universidad=="UBA"){
      return ["Nicolas", " Victor"];
    };
    
    else{
      return ["Pepe", "Juan Carlos"];
    };
  };
  
  clickEnEstudiante(evento):void{
    //La funcion clickEnEstudiante recibe la variable "evento"
    
    this.seleccionado.emit({
      /*significa que voy a emitir un evento del tipo "seleccionado" 
      (previamente definido como parametro de output)*/
      
      nombre: evento.target.textContent;
      /*voy a pasarle el nombre del estudiante seleccionado 
      y para eso uso la funcion target y textContent para ubicarlo*/
    });
  };
};