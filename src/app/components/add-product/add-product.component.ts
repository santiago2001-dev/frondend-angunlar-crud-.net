import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import {backendService} from 'src/app/services/backend'
import{producto} from 'src/app/models/productos'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm : FormGroup;
  Id  : String | null  ; 
Titulo = 'Insertar Producto'
  constructor(
    private router: Router,
    private fb : FormBuilder,

    private serv : backendService,
    private aRouter  : ActivatedRoute  
  
  ) { 
    this.productForm= this.fb.group({
      id :[],
      nombre :['',Validators.required],
      marca : ['',Validators.required],
      precio : ['',Validators.required],
      unidadesExistentes  : ['',Validators.required],
      unidadesVendidas : ['',Validators.required]

    })
    this.Id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }


  addProduct(){
    if(this.productForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })

    }else{
      const Producto :producto = {
        id : this.productForm.get('id')?.value,
        nombre : this.productForm.get('nombre')?.value,
        marca: this.productForm.get('marca')?.value,
        precio: this.productForm.get('precio')?.value,
        unidadesExistentes : this.productForm.get('unidadesExistentes')?.value,
        unidadesVendidas : this.productForm.get('unidadesVendidas')?.value

      }

      if(this.Id !== null){
        this.serv.updateProduct(this.Id,Producto).subscribe(
          data=>{
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'producto agregado correctamente',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/']);

          },error=>{
            swal.fire({
              icon: 'error',
              title: 'algo salio mal intenta de nuevo porfavor ',
            
            })

          }
        )
      }else{
        this.serv.insertProduct(Producto).subscribe(
          data=>{
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'producto agregado correctamente',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/']);
            


          },error=>{
            swal.fire({
              icon: 'error',
              title: 'algo salio mal intenta de nuevo porfavor ',
            
            })
            this.productForm.reset(); //limpiar formulario

          }
        )
      }
    }
  }

  esEditar(){

    if(this.Id !== null){
      this.Titulo = 'Editar producto';
   
    }
  
  }


}
