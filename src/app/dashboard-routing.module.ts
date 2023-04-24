import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardestudiosComponent } from './components/dashboard/dashboardestudios/dashboardestudios.component';
import { DashboardexperienciaComponent } from './components/dashboard/dashboardexperiencia/dashboardexperiencia.component';
import { DashboardpersonaComponent } from './components/dashboard/dashboardpersona/dashboardpersona.component';
import { DashboardproyectosComponent } from './components/dashboard/dashboardproyectos/dashboardproyectos.component';
import { DashboardredesComponent } from './components/dashboard/dashboardredes/dashboardredes.component';
import { DashboardskillsComponent } from './components/dashboard/dashboardskills/dashboardskills.component';
import { AuthGuard } from './servicios/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {path: 'dashboardexperiencia', component: DashboardexperienciaComponent},
      {path: 'dashboardestudios', component: DashboardestudiosComponent},
      {path: 'dashboardproyectos', component: DashboardproyectosComponent},
      {path: 'dashboardskills', component: DashboardskillsComponent},
      {path: 'dashboardredes', component: DashboardredesComponent},
      {path: 'dashboardpersona', component: DashboardpersonaComponent}
    ]
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }