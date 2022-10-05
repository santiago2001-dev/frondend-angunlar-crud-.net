export class producto{
    id : number
    nombre : string
    marca : string
     precio : number
    unidadesExistentes : number
    unidadesVendidas : number
    

    constructor(id : number ,nombre : string,marca:string ,precio:number,unidadesVendidas: number,unidadesExistentes :number){
        this.id =  id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.unidadesExistentes =  unidadesExistentes;
        this.unidadesVendidas=  unidadesVendidas;

    }
}