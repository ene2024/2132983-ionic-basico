import {Component, OnInit } from '@angular/core';

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

  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina"];

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
        action: 'cancer',
      },
    },
  ]

  setOpen(isOpen: boolean){
    this.isActionSheetOpen = isOpen;
  }
}
