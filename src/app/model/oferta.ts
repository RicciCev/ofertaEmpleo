export class Oferta {
    id: any;
    titulo: string;
    descripcion: string;
    empresa: string;
    salario: number;
    ciudad: string;
    email: string;

    constructor() {
        this.titulo = '';
        this.descripcion = '';
        this.empresa = '';
        this.salario = 0;
        this.ciudad = '';
        this.email = '';
    }
}
