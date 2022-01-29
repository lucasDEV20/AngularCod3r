//---------------------------------------------------------

/*
Author : @LucasDEV20
Year : @2021
*/

//---------------------------------------------------------

import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

//importaçoes das rotas
import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { ClientCreateComponent } from './components/clients/client-create/client-create.component'
import { ClientCrudComponent } from './views/client-crud/client-crud.component'
import { ProductUpdateComponent } from './components/product/product-update/product-update.component'
import { ClientUpdateComponent } from './components/clients/client-update/client-update.component'
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component'
import { ClientDeleteComponent } from './components/clients/client-delete/client-delete.component'

//----------------------------------------------------------
const routes: Routes = [
  //chamando os componentes home e product-crud
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductCrudComponent,
  },
  {
    path: 'products/create',
    component: ProductCreateComponent,
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent,
  },
  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent,
  },

  {
    path: 'client',
    component: ClientCrudComponent,
  },

  {
    path: 'client/create',
    component: ClientCreateComponent,
  },

  {
    path: 'client/update/:id',
    component: ClientUpdateComponent,
  },
  {
    path: 'client/delete/:id',
    component: ClientDeleteComponent,
  },
]
//codigos tipados

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
