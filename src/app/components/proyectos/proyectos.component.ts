import { Component } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

 // Inicializar variables de instancia
 proyectos: any = [];

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

     this.proyectos = datos.proyectos;

   });
 }
}

