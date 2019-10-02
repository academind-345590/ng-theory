import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  cars = ['Jiguli','Niva','Moskvich','UAZ','Ford','BMW','Mazda'];
  addCarStatus = false;
  dates = [
    new Date(2000,3,17),
    new Date(2015,1,21),
    new Date(2012,8,28),
    new Date(1997,12,2),
  ]
  constructor(){ }
  
  addCar(){
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
   
}
