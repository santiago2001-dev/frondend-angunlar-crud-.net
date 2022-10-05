import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {backendService} from 'src/app/services/backend'
import { producto } from '../../models/productos';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  listProduct : producto[]= []
  constructor(
    private servis : backendService,
    private router :Router,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }


getProducts()
{

  this.servis.getAllProducts().subscribe(
    data=>{
      
      this.listProduct = data
      
    },
    error=>{
      swal.fire({
        icon: 'error',
        title: 'Sin conexión a la base de datos ',
      
      })
    }

  )
}

deleteContact(id : any){
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

      this.servis.deleteProduct(id).subscribe(
        data=>{
        swalWithBootstrapButtons.fire(
        'producto eliminado!',
        'el producto ha sido eliminado correctamente',
        'success'
      )
      window.location.reload()
      this.getProducts()

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
