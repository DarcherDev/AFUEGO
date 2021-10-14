import { Pedido } from "./pedido.interface";

export interface Cliente {
    id?: string;
    nombres: string;
    apellidos: string;
    documentoIdentidad: string;
    celular: string;
    telefono: string;
    direccion: string;
    departamento: string;
    cidudad: string;
    pedido: Pedido[];
}