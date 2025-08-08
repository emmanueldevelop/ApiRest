export interface UsuariosI{
    id : number
    nombre : string,
    apellidos: string,
	correo : string, 
	contrasena : string,
	celular : string
}

export class UsuariosC{
    id : number ;
    nombre : string;
    apellidos: string;
	correo : string;
	contrasena : string;
	celular : string;
    constructor(id : number, nombre : string, apellidos: string, correo : string, contrasena : string, celular : string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.contrasena = contrasena;
        this.celular = celular;
    }
}