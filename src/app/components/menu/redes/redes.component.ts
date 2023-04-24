import { Component } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Redes } from 'src/app/entidades/Redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  
  redes: Redes[] = [];

  constructor(

    private servicio: RedesService
  ) { }

  listarItems(): void {
    this.servicio.listItems().subscribe(data => {
      this.redes = data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}
