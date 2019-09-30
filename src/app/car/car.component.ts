import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
    <h2>Single Car</h2>
    <p>Lorem ipsum  something yet</p>
  `,
  // styleUrls: ['./car.component.css']
  styles: [`
    h2 {
      color: blue;
    }
    `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
