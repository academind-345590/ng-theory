import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
 
  cars: {name: string, year: number}[] = [{
    name: 'Ford',
    year: 2005
  },
  // {
  //   name: 'Moskvich',
  //   year: 2015
  // },{
  //   name: 'BMW',
  //   year: 2004
  // }
  ];
  
  constructor(){ }

  updateCarList(car: {name: string, year: number}){
    this.cars.push(car);
  }

  changeCarName(){
    this.cars[0].name = 'Drandulet'
  }

  deleteCar(){
    this.cars.splice(0,1);
  }
  
}
