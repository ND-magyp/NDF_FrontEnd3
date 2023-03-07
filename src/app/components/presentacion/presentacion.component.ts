import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})

export class PresentacionComponent implements OnInit {
// Inicializar variables de instancia
personas: any = [];

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

    this.personas = datos.personas;

  });
}
}
