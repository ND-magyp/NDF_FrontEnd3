export class Proyectos {
    id?: number;
    logo_proyecto: string;
    url_proyecto: string;
    titulo_proyecto: string;
    descripcion: string;
    
    constructor(logo_proyecto: string, url_proyecto: string, titulo_proyecto: string, 
        descripcion: string) {
		this.logo_proyecto = logo_proyecto;
		this.url_proyecto = url_proyecto;
		this.titulo_proyecto = titulo_proyecto;
		this.descripcion = descripcion;
	}
}

