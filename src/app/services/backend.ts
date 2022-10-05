import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../models/productos';
import { Observable } from 'rxjs';
import { cliente } from '../models/clientes';
import { venta } from '../models/ventas';



@Injectable({
  providedIn: 'root'
})
export class backendService {
  UrlClient = 'https://localhost:44358/api/cliente'
  UrlProduct = 'https://localhost:44358/api/producto'
  Urlventas = 'https://localhost:44358/api/venta'

  constructor(
    private http : HttpClient,

  ) { }

  getAllProducts():Observable<any>{
    return this.http.get(this.UrlProduct);

  }

  insertProduct(Producto :producto){
    return this.http.post(this.UrlProduct,Producto)

  }

updateProduct(id :any,Producto: producto):Observable<any>{
  return this.http.put(this.UrlProduct+'/'+id,Producto)

}

  
  deleteProduct(id: any):Observable<any>{
  
    return this.http.delete(this.UrlProduct+'/'+id)
  }



  

  getAllCliente():Observable<any>{
    return this.http.get(this.UrlClient);

  }

  insertCliente(cli :cliente){
    return this.http.post(this.UrlClient,cli)

  }

updateCliente(id :any,cli: cliente):Observable<any>{
  return this.http.put(this.UrlClient+'/'+id,cli)

}

  
  deleteCliente(id: any):Observable<any>{
  
    return this.http.delete(this.UrlClient+'/'+id)
  }





  getAllVentas():Observable<any>{
    return this.http.get(this.Urlventas);

  }

  insertVenta(vent :venta){
    return this.http.post(this.Urlventas,vent)

  }

updateVenta(id :any,vent: venta):Observable<any>{
  return this.http.put(this.Urlventas+'/'+id,vent)

}

  
  deleteVenta(id: any):Observable<any>{
  
    return this.http.delete(this.Urlventas+'/'+id)
  }

}
