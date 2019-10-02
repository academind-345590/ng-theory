import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  carYear = 2019;

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

  addCar(){
    this.cars.push({
      name: this.carName,
      year: this.carYear
    })
    this.carName = '';
    this.carYear = 2019;
  }
  
  
}
