export class venta{
id  : number
idCliente :number 
idProducto :number
fecha :string
constructor(id:number,idCliente: number,idProducto: number,fecha:string){
    this.id = id
    this.idCliente =  idCliente
    this.idProducto = idProducto
    this.fecha = fecha

} 
}