export class Experiencias {
    id?: number;
    empresa: string;
    puesto: string;
    inicio: string;
    fin: string;
    
    constructor(empresa: string, inicio: string, fin: string, puesto: string 
        ) {

		this.empresa = empresa;
		this.inicio = inicio;
		this.fin = fin;
		this.puesto = puesto;
	}
}


