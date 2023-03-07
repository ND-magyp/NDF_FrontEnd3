import { Component } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  // Inicializar variables de instancia
  educaciones: any = [];

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

      this.educaciones = datos.educaciones;

    });
  }
}
