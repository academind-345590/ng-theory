import { Component } from '@angular/core';
import { CarsService } from './cars.service';

export interface Cars {
  id: number,
  name: string,
  color: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars: Cars;

  constructor(private carsService: CarsService){};

  loadCars(){
    this.carsService
      .getCars()
      .subscribe((cars: Cars)=>{
        this.cars=cars;
      })
  }
}
