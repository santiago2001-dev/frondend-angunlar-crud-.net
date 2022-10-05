import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import {backendService} from 'src/app/services/backend'
import {cliente} from 'src/app/models/clientes'
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  clienteForm : FormGroup;
  Id :String |null;
  Titulo = 'insertar cliente'


  constructor(
    private router : Router,
    private aRouter : ActivatedRoute,
    private fb : FormBuilder,
    private serv : backendService,
  ) { 


    this.clienteForm = this.fb.group({
      id:[],
      nombre : ['',Validators.required],
      edad : ['',Validators.required],
      documento : ['',Validators.required],
      tipoDocumento : ['',Validators.required]

    })
    this.Id = this.aRouter.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
  
  this.esEditar()
}

  addClient(){
    if(this.clienteForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })

    }else{
      const cli : cliente={
        id: this.clienteForm.get('id')?.value,
        nombre: this.clienteForm.get('nombre')?.value,
        edad : this.clienteForm.get('edad')?.value,
        documento: this.clienteForm.get('documento')?.value,
        tipoDocumento : this.clienteForm.get('tipoDocumento')?.value


      }

      if(this.Id !== null){
        this.serv.updateCliente(this.Id,cli).subscribe(
          data=>{
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'producto agregado correctamente',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/clients']);
          },error=>{
            swal.fire({
              icon: 'error',
              title: 'algo salio mal intenta de nuevo porfavor ',
            
            })


          }
        )

      }else{
        this.serv.insertCliente(cli).subscribe(
          data=>{
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'producto agregado correctamente',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/clients']);
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
