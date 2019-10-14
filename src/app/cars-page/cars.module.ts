import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsPageComponent } from './cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { CarsService } from '../cars.service';
import { CarRoutingModule } from './cars-routing.module';


@NgModule({
  declarations: [
    CarsPageComponent,
    CarPageComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ],
  providers: [CarsService]
})

export class CarsModule {

}