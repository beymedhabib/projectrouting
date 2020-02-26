import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { GuardGuard } from './guard.guard';


const routes: Routes = [
  { path: 'add', component: AddComponent, canActivate: [GuardGuard]},
  { path: 'list', component: ListComponent, canActivate: [GuardGuard]},
  { path: 'update/:i', component: UpdateComponent, canActivate: [GuardGuard]},
  { path: 'weather' , component: WeatherComponent, canActivate: [GuardGuard]},
  { path: 'login' , component: LoginComponent},
  { path: 'registre' , component: RegistreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

