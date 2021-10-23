export interface User {
    id?: string;
    user: string;
    rol: Rol;
    email: string;
    password: string;
}

export enum Rol{
    admin = "admin",
    user = "user",
} 