import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

//make paths for routing
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // children:[
    //   {path: 'newcomponentpath', component:NewComponent}
    // ]
  },
  {
    path: 'login/:id',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    component: NoPageFoundComponent,
    path: '**', //wildcard
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
