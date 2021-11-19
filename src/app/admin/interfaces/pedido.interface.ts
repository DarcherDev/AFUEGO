export interface Pedido {
    id?: string;
    prendaId:string;
    clientesId:string;
    cantidad:number;
    total:number;
    estado:string;
}