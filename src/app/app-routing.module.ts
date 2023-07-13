import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignupComponent} from "./signup/signup.component";
import {ControlPageComponent} from "./control-page/control-page.component";
import { AuthGuard } from './Service/auth-guard.service';
import { UnauthorizedAccessComponent } from './unauthorized-access/unauthorized-access.component';


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ['admin'] }},
  { path: 'signup', component: SignupComponent},
  { path: 'ControlPage', component:  ControlPageComponent},
  { path: 'unauthorized-access', component: UnauthorizedAccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
