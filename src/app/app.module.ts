import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { DatePickerComponent } from './date-picker/date-picker.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoPageFoundComponent,
    DatePickerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
