import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  
  salir() {
    if (confirm("Cerrar sesión?")) {
      this.ruta.navigate(['/']);
      console.log("Inicio portfolio");
    }
  }

}