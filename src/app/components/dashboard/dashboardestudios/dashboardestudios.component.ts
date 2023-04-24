import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/entidades/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-dashboardestudios',
  templateUrl: './dashboardestudios.component.html',
  styleUrls: ['./dashboardestudios.component.css']
})
export class DashboardestudiosComponent implements OnInit {

  form: FormGroup;
  estudios: Estudios[]=[];
  item: any;
  id?:number;

  constructor(

    private http: HttpClient,
    private servicio: EstudiosService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) 
  {
    this.form = this.formBuilder.group({
      id: [''],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      lugar: ['', [Validators.required, Validators.minLength(3)]],
      anio: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],

    });
  }
  
  get Lugar() {
    return this.form.get("lugar");
  }

  get LugarInvalido(){
    return this.Lugar?.errors && this.Lugar?.touched;
  }

  get LugarValido(){
    return !this.Lugar?.errors && this.Lugar?.touched;
  }

  get Anio() {
    return this.form.get("anio");
  }

  get AnioInvalido(){
    return this.Anio?.errors && this.Anio?.touched;
  }

  get AnioValido(){
    return !this.Anio?.errors && this.Anio?.touched;
  }
 
  get Titulo() {
    return this.form.get("titulo");
  }

  get TituloInvalido(){
    return this.Titulo?.errors && this.Titulo?.touched;
  }

  get TituloValido(){
    return !this.Titulo?.errors && this.Titulo?.touched;
  }

  listarItems(): void{
    this.servicio.listItems().subscribe({
      next: (data) => {
        this.estudios=data;
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