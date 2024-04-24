import {Component, OnInit } from '@angular/core';
import { alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  isActionSheetOpen = false;

  constructor() { }

  ngOnInit() {
  }

  alumnos: alumno[]=[]

  alumno: alumno={
    nombre:'',
    presente: false,
  }

  agregarAlumno(){
    this.alumnos.push(this.alumno);

    this.alumno = {
      nombre:'',
      presente:false,
    }
  }

  public actionSheetOptions = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancelar',
      role: "cancel",
      data: {
        action: 'cancel',
      },
    },
  ]

  setOpen(isOpen: boolean){
    this.isActionSheetOpen = isOpen;
  }
}
