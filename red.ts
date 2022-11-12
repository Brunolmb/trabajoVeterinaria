

class Red{
    private nombre : string;
    protected listaSucursales : Sucursales[];
    protected listaClientes : Clientes [];
    protected listaProveedores : Proveedores[];


    public constructor (nombre : string, listaSucursales : Sucursales[] , listaClientes : Clientes[] , listaProveedores : Proveedores[] ){
        this. nombre = nombre;
        this.listaSucursales = listaSucursales;
        this.listaClientes = listaClientes;
        this.listaProveedores = listaProveedores;

    }

    public getListaSucursales(): Sucursales []{
        return this.listaSucursales;
    }
    
    public getListaClientes(): Clientes []{
        return this.listaClientes;
    }
    
    public getListaProveedores(): Proveedores []{
        return this.listaProveedores;
    }

}