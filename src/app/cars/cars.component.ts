import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
 
  cars: {name: string, year: number}[] = [{
    name: 'Ford',
    year: 2115
  },{
    name: 'Moskvich',
    year: 2115
  },{
    name: 'BMW',
    year: 2115
  }];
  
  constructor(){ }

  updateCarList(car: {name: string, year: number}){
    this.cars.push(car);
  }
  
}
