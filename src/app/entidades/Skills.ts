export class Skills {

    id?: number;
    nombre: string;
    porcentaje: number;
    color: string;
    ico_font: string;
    titulo: string;
    

    constructor(nombre: string, porcentaje: number, color: string, ico_font: string, titulo: string,
        ) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.color = color;
        this.ico_font = ico_font;
        this.titulo = titulo;
       
    }
}
