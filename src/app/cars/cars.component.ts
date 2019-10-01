import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  cars = ['Jiguli','Niva','Moskvich','UAZ'];
  items = [
    {id:2348, name: 'item 1.U.13'},
    {id:9879, name: 'item 8.W.84'},
    {id:2846, name: 'item 6.PP.56'},
  ];
  addCarStatus = false;
  constructor(){ }
  
  addCar(){
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
  
}
