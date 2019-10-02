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
  constructor(){ }
  
  addCar(){
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
  countLengthName(car: string){
    return car.length <= 3 ? true : false;
  }
  
}
