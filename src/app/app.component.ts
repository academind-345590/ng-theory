import { Component } from '@angular/core';
import { CarsService } from './cars.service';

export interface Cars {
  filter: any;
  push(newCar: Cars);
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
  carName: string;
  carColor: string;
  colors=[
    'red',
    "blue",
    "aqua",
    "green",
    "grey",
    "orange",
    "black",
    "pink",
    "yellow",
    "olive"
  ]

  constructor(private carsService: CarsService){};

  loadCars(){
    this.carsService
      .getCars()
      .subscribe((cars: Cars)=>{
        this.cars=cars;
      },
      (error)=>{
        alert(error);
      }
      )
  }

  addCar(){
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((newCar: Cars)=>{
        if(this.cars)
        this.cars.push(newCar);
      })
    this.carName = '';
    this.carColor = '';
  }

  getRandColor(){
    const num = Math.round(Math.random()*(this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars){
    this.carsService
      .changeColor(car , this.getRandColor())
      .subscribe((date) => {
        // console.log(date);
      })
  }

  deleteCar(car: Cars){
    this.carsService
      .deleteCar(car)
      .subscribe((date) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      })
  }
}
