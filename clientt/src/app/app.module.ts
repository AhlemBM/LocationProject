import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './component/login/login.component';

import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import {SharedModule} from "./shared/shared.module";
import {DefaultModule} from "./default/default.module";
import { CalenderComponent } from './component/calender/calender.component';
import { LogementComponent } from './component/logement/logement.component';
import { PayComponent } from './component/pay/pay.component';
import { FactureComponent } from './component/facture/facture.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import {HttpClientModule} from "@angular/common/http";
import {Axios} from "axios";
import {FormsModule} from "@angular/forms";
import { UserComponent } from './component/user/user/user.component';

import { AppartementComponent } from './component/add/appartement/appartement.component';
import {AuthGuard} from "./guard/auth.guard";
import {AppartementService} from "./services/appartementService/appartement.service";
import {UserService} from "./services/user/user.service";
import { ProfileComponent } from './component/profile/profile.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  // Autres routes ici
];



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    RegisterComponent,
    HomeComponent,
    CalenderComponent,
    LogementComponent,
    PayComponent,
    FactureComponent,
    ReservationComponent,
    UserComponent,

    AppartementComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DefaultModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ AuthGuard, AppartementService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
