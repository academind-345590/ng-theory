import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarPageComponent } from './car-page/car-page.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent, children:[
    { path: ':id/:name', component: CarPageComponent },
  ] },
  { path: '', component: HomePageComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}