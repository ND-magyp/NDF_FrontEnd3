import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';
import { RedesComponent } from './components/redes/redes.component';

import { BotonLoginComponent } from './components/boton-login/boton-login.component';
import { LoginComponent } from './components/modals/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { BotonLogoutComponent } from './components/boton-logout/boton-logout.component';
import { RedesSocialesComponent } from './components/modals/redes-sociales/redes-sociales.component';
import { BannerComponent } from './components/modals/banner/banner.component';
import { PresentacionModalComponent } from './components/modals/presentacion-modal/presentacion-modal.component';
import { HabilidadesModalComponent } from './components/modals/habilidades-modal/habilidades-modal.component';
import { ExperienciaModalComponent } from './components/modals/experiencia-modal/experiencia-modal.component';
import { EducacionModalComponent } from './components/modals/educacion-modal/educacion-modal.component';
import { PiepaginaComponent } from './components/modals/piepagina/piepagina.component';
import { ProyectosModalComponent } from './components/modals/proyectos-modal/proyectos-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    Error404Component,
    RedesComponent,
    BotonLoginComponent,
    LoginComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    BotonLogoutComponent,
    RedesSocialesComponent,
    BannerComponent,
    PresentacionModalComponent,
    HabilidadesModalComponent,
    ExperienciaModalComponent,
    EducacionModalComponent,
    PiepaginaComponent,
    ProyectosModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


