import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cars } from './app.component';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) {}

  getCars(){
    const header = new HttpHeaders({
      'Content-Type':  'application/json; charset=utf8'
    })
    return this.http.get<Cars>('http://localhost:3000/cars', {headers: header})
    .pipe(
      catchError(this.handleError)
    );
  }

  addCar(carName: string, carColor: string){
    const date = {
      name: carName,
      color: carColor
    }
    return this.http.post('http://localhost:3000/cars',date);
  }

  changeColor(car: any, color: string){
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`,car);
  }

  deleteCar(car: any){
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }

  private handleError(error: HttpErrorResponse) {
   return throwError( 'Сeрвер капут!');
  };
}
