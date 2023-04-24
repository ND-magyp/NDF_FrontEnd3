import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/entidades/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 
  proyectos: Proyectos[]=[];

  constructor(

    private servicio: ProyectosService,
    ) { }

    listarItems(): void{
    this.servicio.listItems().subscribe(data =>{
      this.proyectos=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}

