import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <input type="text" class="form-control" [(ngModel)]="searchCar"><br>
      <button class="btn btn-primary" (click)="addCar()">Добавить машину</button>
      <hr>
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let car of cars | carFilter:searchCar:'description'; let i=index" >
          <b>{{ i+1 }}</b>  {{ car.name }}  <i>{{ car.description }}</i>
        </li>
      </ul>     
    </div>
  `
})
export class AppComponent {
  searchCar = '';
  cars = [
    { name: 'Jiguli', description: 'Lorem ptomise '},
    { name: 'Moskvich', description: 'Lorem velocity '},
    { name: 'UAZ', description: 'Lorem capacity '},
    { name: 'Niva', description: 'Lorem upsum '},
    { name: 'Kamaz', description: 'Lorem babadum'},
    { name: 'Zapotodjez', description: 'Lorem vehicle '},
  ];

  addCar(){
    this.cars.push({
      name: "New Car", description: "New description"
    })
  }
}
