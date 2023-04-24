import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Redes } from 'src/app/entidades/Redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-dashboardredes',
  templateUrl: './dashboardredes.component.html',
  styleUrls: ['./dashboardredes.component.css']
})
export class DashboardredesComponent implements OnInit {

  form: FormGroup;
  redes: Redes[] = [];
  item: any;
  id?: number;

  constructor(

    private http: HttpClient,
    private servicio: RedesService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      url: ['', [Validators.required]],
      ico_font: ['', [Validators.required]],
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

  get Url() {
    return this.form.get("url");
  }

  get UrlInvalido() {
    return this.Url?.errors && this.Url?.touched;
  }

  get UrlValido() {
    return !this.Url?.errors && this.Url?.touched;
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

  listarItems(): void {
    this.servicio.listItems().subscribe({
      next: (data) => {
        this.redes = data;
        console.log("Items cargados correctamente");
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