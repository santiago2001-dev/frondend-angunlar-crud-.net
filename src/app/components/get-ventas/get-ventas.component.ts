import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'; 
import {backendService} from 'src/app/services/backend'
import {venta} from'../../models/ventas'
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-get-ventas',
  templateUrl: './get-ventas.component.html',
  styleUrls: ['./get-ventas.component.css']
})
export class GetVentasComponent implements OnInit {
  listVenta : venta[]=[]


  constructor(
    private servis : backendService,
    private router : Router
  ) { 
   
  }

  ngOnInit(): void {
    this.getVentas()
  }



getVentas(){
  this.servis.getAllVentas().subscribe(
    data=>{
      this.listVenta = data
    },error=>{
      swal.fire({
        icon: 'error',
        title: 'Sin conexión a la base de datos ',
      
      })
    }
  )

}



deteleVenta(id : any){
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

      this.servis.deleteVenta(id).subscribe(
        data=>{
        swalWithBootstrapButtons.fire(
        'producto eliminado!',
        'el producto ha sido eliminado correctamente',
        'success'
      )
      window.location.reload()
      this.getVentas()

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
