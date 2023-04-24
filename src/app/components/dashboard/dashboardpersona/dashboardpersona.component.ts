import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entidades/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-dashboardpersona',
  templateUrl: './dashboardpersona.component.html',
  styleUrls: ['./dashboardpersona.component.css']
})
export class DashboardpersonaComponent implements OnInit {

  form: FormGroup;
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "","","");
  id?:number;

  constructor(

    private http: HttpClient,
    private servicio: PersonaService,
    private formBuilder: FormBuilder,
    private ruta: Router
    )
    {
      this.form = this.formBuilder.group({
        id: [''],
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        apellido: ['', [Validators.required, Validators.minLength(2)]],
        titulo1: ['', [Validators.required, Validators.minLength(2)]],
        titulo2: ['', [Validators.required, Validators.minLength(2)]],
        sobre_mi: ['', [Validators.required, Validators.minLength(2)]],
        banner: ['', [Validators.required]],
        profile_image: ['', [Validators.required]],
        cvpdf: ['', [Validators.required]],
        textofooter: ['', [Validators.required]],
        email: [''],
        password: [''],
      });
    }
  
    get Nombre() {
      return this.form.get("nombre");
    }
  
    get NombreInvalido(){
      return this.Nombre?.errors && this.Nombre?.touched;
    }
  
    get NombreValido(){
      return !this.Nombre?.errors && this.Nombre?.touched;
    }
  
    get Apellido() {
      return this.form.get("apellido");
    }
  
    get ApellidoInvalido(){
      return this.Apellido?.errors && this.Apellido?.touched;
    }
  
    get ApellidoValido(){
      return !this.Apellido?.errors && this.Apellido?.touched;
    }
  
    get Titulo1() {
      return this.form.get("titulo1");
    }
  
    get Titulo1Invalido(){
      return this.Titulo1?.errors && this.Titulo1?.touched;
    }
  
    get Titulo1Valido(){
      return !this.Titulo1?.errors && this.Titulo1?.touched;
    }

    get Titulo2() {
      return this.form.get("titulo2");
    }
  
    get Titulo2Invalido(){
      return this.Titulo2?.errors && this.Titulo2?.touched;
    }
  
    get Titulo2Valido(){
      return !this.Titulo2?.errors && this.Titulo2?.touched;
    } 
    
    get Sobre_mi() {
      return this.form.get("sobre_mi");
    }
  
    get Sobre_miInvalido(){
      return this.Sobre_mi?.errors && this.Sobre_mi?.touched;
    }
  
    get Sobre_miValido(){
      return !this.Sobre_mi?.errors && this.Sobre_mi?.touched;
    }

    get Cvpdf() {
      return this.form.get("cvpdf");
    }
  
    get CvpdfInvalido(){
      return this.Cvpdf?.errors && this.Cvpdf?.touched;
    }
  
    get CvpdfValido(){
      return !this.Cvpdf?.errors && this.Cvpdf?.touched;
    }

    get Textofooter() {
      return this.form.get("textofooter");
    }
  
    get TextofooterInvalido(){
      return this.Textofooter?.errors && this.Textofooter?.touched;
    }
  
    get TextofooterValido(){
      return !this.Textofooter?.errors && this.Textofooter?.touched;
    }

    get Banner() {
      return this.form.get("banner");
    }
  
    get BannerInvalido(){
      return this.Banner?.errors && this.Banner?.touched;
    }
  
    get BannerValido(){
      return !this.Banner?.errors && this.Banner?.touched;
    }

    get Profile_image() {
      return this.form.get("Profile_image");
    }
  
    get Profile_imageInvalido(){
      return this.Profile_image?.errors && this.Profile_image?.touched;
    }
  
    get Profile_imageValido(){
      return !this.Profile_image?.errors && this.Profile_image?.touched;
    }
  
    ngOnInit(): void {
      this.cargarItem();
    }
  
    cargarItem(){
      this.servicio.getById(1).subscribe({
          next: (data) => {
            this.persona=data;
            this.form.setValue(data);
          },
          error: (e) => console.error(e),
          complete: () => console.info('Complete')
        });
      console.log("Cargado correctamente");
      }
    
    guardarItem() {
      let item = this.form.value;
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
  
    limpiar() {
      console.log("Se reinicio");
      this.form.reset();
    }
  
    volver(){
      this.ruta.navigate(['/dashboard']);
    }
  
}