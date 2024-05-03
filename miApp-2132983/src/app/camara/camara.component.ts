import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto.service';
import { Foto } from '../foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(private fotoService: FotoService) { }

  ngOnInit() {}

  public fotos: Foto[] = this.fotoService.fotos;

  tomarFoto(){
    this.fotoService.addNewToGallery()
  }

}
