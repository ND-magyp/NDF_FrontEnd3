import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/entidades/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  //Crear e Inicializar variables de instancia para almacenar los datos que trae Servicio
  estudios: Estudios[]=[];

  constructor(
  // Inyecta servicio para tener acceso en la clase a los metodos
    private servicio: EstudiosService,
    ) { }

    listarItems(): void{
    this.servicio.listItems().subscribe(data =>{
      this.estudios=data;
    });
  }
 // Almacena en variable instancia los datos que trae el servicio
  ngOnInit(): void {
    this.listarItems();
  }

}
