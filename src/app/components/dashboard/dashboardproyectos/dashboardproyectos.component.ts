import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/entidades/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-dashboardproyectos',
  templateUrl: './dashboardproyectos.component.html',
  styleUrls: ['./dashboardproyectos.component.css']
})
export class DashboardproyectosComponent implements OnInit {

  form: FormGroup;
  proyectos: Proyectos[]=[];
  item: any;
  id?:number;

  constructor(

    private http: HttpClient,
    private servicio: ProyectosService,
    private formBuilder: FormBuilder,
    private ruta: Router
  )
  {   
    this.form = this.formBuilder.group({
      id: [''],
            logo_proyecto: [''],
            url_proyecto: [''],
      titulo_proyecto: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(8)]],

    });
  }
  
  get logo_proyecto() {
    return this.form.get("logo_proyecto");
  }

  get url_proyecto() {
    return this.form.get("url_proyecto");
  }

    get titulo_proyecto() {
    return this.form.get("titulo_proyecto");
  }

  get titulo_proyectoInvalido(){
    return this.titulo_proyecto?.errors && this.titulo_proyecto?.touched;
  }

  get titulo_proyectoValido(){
    return !this.titulo_proyecto?.errors && this.titulo_proyecto?.touched;
  }

  get Descripcion() {
    return this.form.get("descripcion");
  }

  get DescripcionInvalido(){
    return this.Descripcion?.errors && this.Descripcion?.touched;
  }

  get DescripcionValido(){
    return !this.Descripcion?.errors && this.Descripcion?.touched;
  }  

  listarItems(): void{
    this.servicio.listItems().subscribe({
      next: (data) => {
        this.proyectos=data;
        console.log("Cargados correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('Complete')
  })
}
  
  ngOnInit(): void {
    this.listarItems();
  }

  cargarItem(id: number){
    this.servicio.getById(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('Complete')
      });
    console.log("Cargado correctamente");
    }
  
  guardarItem() {
    let item = this.form.value;
    if (item.id == '') {
      this.servicio.saveItem(item).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('Complete')
      });
      window.location.reload();
      console.log("Agregado correctamente");
    } else {
      this.servicio.updateItem(item).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('Complete')
      });
      window.location.reload();
      console.log("Modificado correctamente");
    }
  }

  borrarItem(id: number) {
    if (confirm("Confirma borrado?")) {
      this.servicio.deleteItem(id).subscribe(data => {});
      window.location.reload();
      console.log("Eliminado correctamente");
    }
  }
       
  limpiar() {
    console.log("Se reinicio");
    this.form.reset();
  }

  volver(){
    this.ruta.navigate(['/dashboard']);
  }

}