import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/get-product/crud.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {GetClienteComponent} from './components/get-cliente/get-cliente.component'
import {AddClienteComponent} from './components/add-cliente/add-cliente.component'
import { AddVentasComponent } from './components/add-ventas/add-ventas.component';
import { GetVentasComponent } from './components/get-ventas/get-ventas.component';
const routes : Routes = [

  {path : '',component :CrudComponent},
  {path: 'addProduct',component : AddProductComponent},
  {path : 'updateProduct/:id',component : AddProductComponent},
  
  {path:'clients',component:GetClienteComponent},
  {path:'addClient',component:AddClienteComponent},
  {path:'updateClient/:id',component:AddClienteComponent},

  {path:'updateVentas/:id',component:AddVentasComponent},
  {path:'addventas',component :AddVentasComponent},
  {path:'ventas',component:GetVentasComponent}
]


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
