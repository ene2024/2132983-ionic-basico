import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'productos',
    component:ProductsComponent,
  },
  {
    path: 'producto/:id',
    component: ProductoDetalleComponent,
  },
  {
    path:'',
    redirectTo: '/productos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
