import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-piedepagina',
  templateUrl: './piedepagina.component.html',
  styleUrls: ['./piedepagina.component.css']
})
export class PiedepaginaComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "");

  constructor(
  
    private servicio: PersonaService,
    ) { }

    
  ngOnInit(): void {
    this.cargarItem();
  }

  cargarItem(){
    this.servicio.getById(1).subscribe({
        next: (data) => {
          this.persona=data;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Cargado correctamente");
    }
}