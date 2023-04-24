export class Redes {
    id?: number;
    nombre: string;
    url: string;
    ico_font: string;
    
    constructor(nombre: string, url: string, ico_font: string) {
		this.nombre = nombre;
		this.url = url;
		this.ico_font = ico_font;
	}
}

