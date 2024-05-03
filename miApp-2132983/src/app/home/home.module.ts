import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { ProductsComponent } from '../products/products.component';
import { CamaraComponent } from '../camara/camara.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],

  declarations: [HomePage, ListaAlumnosComponent, CamaraComponent],
})
export class HomePageModule {}
