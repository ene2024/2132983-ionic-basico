import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private consulta: ConsultaService) {}

  productos: any[]=[];

  obtenerProductos(): void{
     this.consulta.getProductos().subscribe((resp: Object) =>
    {
      console.log(resp);
      this.productos = resp as any[];
    })
  }

}
