import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  addCarStatus = '';
  inputText = '';
  constructor(){ }
  
  addCar(){
    this.addCarStatus = "Машина была добавлена";
  }
  onKeyUp(event){
    if (event.code === 'Enter')
      this.inputText = event.target.value ;
  }
}
