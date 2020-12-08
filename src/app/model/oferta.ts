export class Oferta {
    id: number;
    titulo: string;
    descripcion: string;
    empresa: string;
    salario: number;
    ciudad: string;
    email: string;

    constructor() {
        this.id = 0;
        this.titulo = '';
        this.descripcion = '';
        this.empresa = '';
        this.salario = 0;
        this.ciudad = '';
        this.email = '';
    }
}