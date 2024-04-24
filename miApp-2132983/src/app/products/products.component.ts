import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit {

  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  productos: any[]=[];

  obtenerProductos(): void{
     this.consulta.getProductos().subscribe((resp: Object) =>
    {
      console.log(resp);
      this.productos = resp as any[];
    })
  }

}
