import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <h6>{{ name }}</h6>
      <h6>{{ name | lowercase }}</h6>
      <h6>{{ name | uppercase }}</h6>
      <h6>{{ name | slice:3:6 | uppercase }}</h6>
      <hr>
      <h6>{{ pi }}</h6>
      <h6>{{ pi | number }}</h6>
      <h6>{{ pi | number: '1.3-5' }}</h6>
      <h6>{{ pi | number: '2.2-2' }}</h6>
      <hr>
      <h6>{{ money | currency }}</h6>
      <h6>{{ money | currency: 'TUGRIK' }}</h6>
      <h6>{{ money | currency: 'EUR' : 'code' }}</h6>
      <h6>{{ money | currency: 'EUR' : 'symbol' }}</h6>
      <h6>{{ money | currency: 'EUR' : 'symbol-narrow' }}</h6>
      <hr>
      <h6>{{ date }}</h6>
      <h6>{{ date | date }}</h6>
      <h6>{{ date | date: 'longTime' }}</h6>
      <h6>{{ date | date: 'shortDate' }}</h6>
      <h6>{{ date | date: 'shortDate' }}</h6>
      <h6>{{ date | date: 'shortDate' }}</h6>
      <hr>
      <h6>{{ amount | percent }}</h6>
      <h6>{{ amount | percent: '4.3-5' }}</h6>
      <hr>
      <h6>{{ object }}</h6>
      <pre>{{ object | json }}</pre>
    </div>
  `
})
export class AppComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };
}
