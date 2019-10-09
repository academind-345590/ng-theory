import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from './app.component';

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) {}

  getCars(){
    return this.http.get<Cars>('http://localhost:3000/cars');
  }

  addCar(carName: string, carColor: string){
    const date = {
      name: carName,
      color: carColor
    }
    return this.http.post('http://localhost:3000/cars',date);
  }
}
