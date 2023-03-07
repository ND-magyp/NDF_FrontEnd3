import { Component } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  // Inicializar variables de instancia
  habilidades: any = [];

  constructor(
    // Inyectar el servicio para tener acceso en la clase a los metodos
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    // Almaceno en la variable instancia(infoPresentacion)los datos 
    // recuperados por el servicio

    this.personaService.getDatos().subscribe(datos => {
      console.log(datos);

      //definir info a mostrar

      this.habilidades = datos.habilidades;

    });
  }
}