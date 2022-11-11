import Clientes from "./Clientes"
export default class Sucursal {
    
    protected id : number;
    protected listaClientes : Clientes;
    protected direccion : string;

    public constructor (id:number , listaClientes:Clientes , direccion : string){
        this.id = id;
        this.listaClientes = listaClientes;
        this.direccion = direccion;
    }

    public getId():number{
        return this.id;
    }

    public getlistaClientes():void{
        console.log (this.listaClientes);
    }

    public getDireccion():string{
        return this.direccion;
    }
}