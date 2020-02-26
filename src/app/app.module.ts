import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { PipePipe } from './pipe.pipe';
import { CheckPipe } from './check.pipe';

// const routes: Routes = [
//   {path:  '', pathMatch:  'full', redirectTo:  'home'},
//   {path: 'navbar', component: NavbarComponent},
//   {path: 'add', component: AddComponent},
//   {path: 'list', component: ListComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    NavbarComponent,
    WeatherComponent,
    LoginComponent,
    RegistreComponent,
    PipePipe,
    CheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 MDBBootstrapModule;
}
