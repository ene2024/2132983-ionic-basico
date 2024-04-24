import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private consulta: ConsultaService) {}

}
