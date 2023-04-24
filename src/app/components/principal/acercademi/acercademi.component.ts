import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "");

  constructor(

    private servicio: PersonaService,
    ) { }

    
  ngOnInit(): void {
    this.cargarItem();
  }
 // Dejo o no?
  cargarItem(){
    this.servicio.getById(1).subscribe({
        next: (data) => {
          this.persona=data;
        },
        error: (e) => console.error(e),
        complete: () => console.info('Complete')
      });
    console.log("Cargado correctamente");
    }
}

