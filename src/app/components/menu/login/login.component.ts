import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autentication.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entidades/Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';


  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "");

  //Inyecta el formBuilder en el constructor
  constructor(private formBuilder: FormBuilder, private autenticarService: AutenticacionService, private ruta: Router) {
  //Controles formulario de login
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', "");
  }

  get Mail() {
    return this.form.get("email");
  }

  get MailInvalido() {
    return this.Mail?.errors && this.Mail?.touched;
  }

  get MailValido() {
    return !this.Mail?.errors && this.Mail?.touched;
  }

  get Password() {
    return this.form.get("password");
  }

  get PasswordInvalido() {
    return this.Password?.errors && this.Password?.touched;
  }

  get PasswordValido() {
    return !this.Password?.errors && this.Password?.touched;
  }

  limpiar() {
    console.log("Se reinició el formulario")
    this.form.reset();
    this.ruta.navigate(['']);
  }

  onEnviar(event: Event) {
    console.log("");
    event.preventDefault;
    if (this.form.valid) {
      console.log(JSON.stringify(this.form.value));
      this.autenticarService.loginUser(this.form.value).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data.id));
        if (data.id) {
          //alert("Podes editar el portfolio");
          this.ruta.navigate(['dashboard']);
        } else {
          alert("Error de inició sesión");
        }
      }, error => {
        alert("ERROR");
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Sin acceso");
      this.ruta.navigate(['/']);
    }
  }
}
