import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/entidades/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-dashboardskills',
  templateUrl: './dashboardskills.component.html',
  styleUrls: ['./dashboardskills.component.css']
})
export class DashboardskillsComponent implements OnInit {

  form: FormGroup;
  skills: Skills[] = [];
  item: any;
  id?: number;

  constructor(

    private http: HttpClient,
    private servicio: SkillsService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      porcentaje: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      color: ['', [Validators.required]],
      ico_font: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
    });
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get NombreInvalido() {
    return this.Nombre?.errors && this.Nombre?.touched;
  }

  get NombreValido() {
    return !this.Nombre?.errors && this.Nombre?.touched;
  }

  get Porcentaje() {
    return this.form.get("porcentaje");
  }

  get PorcentajeInvalido() {
    return this.Porcentaje?.errors && this.Porcentaje?.touched;
  }

  get PorcentajeValido() {
    return !this.Porcentaje?.errors && this.Porcentaje?.touched;
  }

  get Ico_font() {
    return this.form.get("ico_font");
  }

  get ico_fontInvalido() {
    return this.Ico_font?.errors && this.Ico_font?.touched;
  }

  get ico_fontValido() {
    return !this.Ico_font?.errors && this.Ico_font?.touched;
  }

  get Titulo() {
    return this.form.get("titulo");
  }

  get TituloInvalido() {
    return this.Titulo?.errors && this.Titulo?.touched;
  }

  get TituloValido() {
    return !this.Titulo?.errors && this.Titulo?.touched;
  }

  get Color() {
    return this.form.get("color");
  }

  get ColorInvalido() {
    return this.Color?.errors && this.Color?.touched;
  }

  get ColorValido() {
    return !this.Color?.errors && this.Color?.touched;
  }

  listarItems(): void {
    this.servicio.listItems().subscribe({
      next: (data) => {
        this.skills = data;
        console.log("Cargados correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  ngOnInit(): void {
    this.listarItems();
  }

  cargarItem(id: number) {
    this.servicio.getById(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
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
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Agregado correctamente");
    } else {
      this.servicio.updateItem(item).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Modificado correctamente");
    }
  }

  borrarItem(id: number) {
    if (confirm("Confirma borrado?")) {
      this.servicio.deleteItem(id).subscribe(data => { });
      window.location.reload();
      console.log("Eliminado correctamente");
    }
  }

  limpiar() {
    console.log("Se reinicio");
    this.form.reset();
  }

  volver() {
    this.ruta.navigate(['/dashboard']);
  }

}