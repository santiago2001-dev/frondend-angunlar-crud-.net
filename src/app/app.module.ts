import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JwtHelperService,JWT_OPTIONS} from'@auth0/angular-jwt'
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//petciones http
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from './components/get-product/crud.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { GetClienteComponent } from './components/get-cliente/get-cliente.component';
import { GetVentasComponent } from './components/get-ventas/get-ventas.component';
import { AddVentasComponent } from './components/add-ventas/add-ventas.component';


@NgModule({
  declarations: [
    AppComponent,

  
     CrudComponent,
     AddProductComponent,
     AddClienteComponent,
     GetClienteComponent,
     GetVentasComponent,
     AddVentasComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [  {provide: JWT_OPTIONS,useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
