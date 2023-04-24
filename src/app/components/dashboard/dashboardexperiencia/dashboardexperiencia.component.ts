import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencias } from 'src/app/entidades/Experiencias';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';

@Component({
  selector: 'app-dashboardexperiencia',
  templateUrl: './dashboardexperiencia.component.html',
  styleUrls: ['./dashboardexperiencia.component.css']
})
export class DashboardexperienciaComponent implements OnInit {

  form: FormGroup;
  experiencias: Experiencias[]=[];
  item: any;
  id?:number;

  constructor(

    private http: HttpClient,
    private servicio: ExperienciasService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) 
  {
    this.form = this.formBuilder.group({
      id: [''],
      empresa: ['', [Validators.required, Validators.minLength(3)]],
      puesto: ['', [Validators.required, Validators.minLength(3)]],
      inicio: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      fin: [''],
    });
  }

  get Empresa() {
    return this.form.get("empresa");
  }

  get EmpresaInvalido(){
    return this.Empresa?.errors && this.Empresa?.touched;
  }

  get EmpresaValido(){
    return !this.Empresa?.errors && this.Empresa?.touched;
  }

  get Puesto() {
    return this.form.get("puesto");
  }

  get PuestoInvalido(){
    return this.Puesto?.errors && this.Puesto?.touched;
  }

  get PuestoValido(){
    return !this.Puesto?.errors && this.Puesto?.touched;
  }
  
  get Inicio() {
    return this.form.get("inicio");
  }

  get InicioInvalido(){
    return this.Inicio?.errors && this.Inicio?.touched;
  }

  get InicioValido(){
    return !this.Inicio?.errors && this.Inicio?.touched;
  }

  get Fin() {
    return this.form.get("fin");
  }

  listarItems(): void{
    this.servicio.listItems().subscribe({
      next: (data) => {
        this.experiencias=data;
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