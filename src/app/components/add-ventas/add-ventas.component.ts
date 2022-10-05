import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import {backendService} from 'src/app/services/backend'
import {venta} from 'src/app/models/ventas'
@Component({
  selector: 'app-add-ventas',
  templateUrl: './add-ventas.component.html',
  styleUrls: ['./add-ventas.component.css']
})
export class AddVentasComponent implements OnInit {
ventaForm : FormGroup
Id :String |null;
Titulo = 'insertar nueva venta'
  constructor(
    private router : Router,
    private aRouter : ActivatedRoute,
    private fb : FormBuilder,
    private serv : backendService,
  ) { 
    this.ventaForm = this.fb.group({
      id:[],
      idCliente:['',Validators.required],
      idProducto:['',Validators.required],
      fecha :['',Validators.required]

    })
    this.Id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
this.esEditar()
  }


addVenta(){
  if(this.ventaForm.invalid){
    swal.fire({
      icon: 'error',
      title: 'los campos son obligatorios',
    
    })
  }else{
    const vent : venta={
      id: this.ventaForm.get('id')?.value,
      idCliente: this.ventaForm.get('idCliente')?.value,
      idProducto: this.ventaForm.get('idProducto')?.value,
      fecha: this.ventaForm.get('fecha')?.value,

    }
    if(this.Id !== null){
      this.serv.updateVenta(this.Id,vent).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'producto agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/ventas']);
        },error=>{
          swal.fire({
            icon: 'error',
            title: 'algo salio mal intenta de nuevo porfavor ',
          
          })


        }
      )

    }else{
      this.serv.insertVenta(vent).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'producto agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/ventas']);
        },error=>{
          swal.fire({
            icon: 'error',
            title: 'algo salio mal intenta de nuevo porfavor ',
          
          })


        }
      )

    }
  }
}


esEditar(){
  if(this.Id !== null){
    this.Titulo = 'Editar Cliente';
 
  }

}

}
