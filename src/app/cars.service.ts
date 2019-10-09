import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from './app.component';

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) {}

  getCars(){
    return this.http.get<Cars>('http://localhost:3000/cars');
  }
}
