import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  // carName = '';
  carYear = 2019;
  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameEl: HTMLInputElement){
    console.log();
    this.carEmitter.emit({
      name: carNameEl.value,
      year: this.carYear
    });

    carNameEl.value = '';
    this.carYear = 2019;
  }
  

}
