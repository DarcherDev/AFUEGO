import { Pedido } from "./pedido.interface";

export interface Cliente {
    id?: string;
    nombres: string;
    apellidos: string;
    documentoIdentidad: string;
    correo:string;
    celular: string;
    direccion: string;
    departamento: string;
    cidudad: string;
    pedido?: Pedido[];
}