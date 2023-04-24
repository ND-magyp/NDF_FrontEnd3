import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/menu/login/login.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthGuard } from './servicios/auth.guard';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    DashboardRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }