import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {backendService} from 'src/app/services/backend';
import {cliente} from 'src/app/models/clientes';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-get-cliente',
  templateUrl: './get-cliente.component.html',
  styleUrls: ['./get-cliente.component.css']
})
export class GetClienteComponent implements OnInit {
  listClient : cliente[] = [];


  constructor(
    private servi : backendService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getCliente();
  }


  getCliente(){
    this.servi.getAllCliente().subscribe(
      data=>{
        this.listClient = data
      },error=>{
        swal.fire({
          icon: 'error',
          title: 'Sin conexión a la base de datos ',
        
        })

      }
    )

  }

 deleteClient(id : any){
  const swalWithBootstrapButtons = swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿estás seguro?',
    text: "Una vez eiminado el contacto no podrá ser recuperado!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'si, deseo eliminarlo',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {

      this.servi.deleteCliente(id).subscribe(
        data=>{
        swalWithBootstrapButtons.fire(
        'producto eliminado!',
        'el producto ha sido eliminado correctamente',
        'success'
      )
      window.location.reload()
      this.getCliente()

    },error=>{
      swal.fire({
        icon: 'error',
        title: 'algo salio mal intenta de nuevo ',
      
      })


    }
    )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'operación cancelada',
        'error'
      )
    }
  })

}

 }


