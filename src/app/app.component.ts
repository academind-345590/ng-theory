import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <h2>{{ num | appPow:3:'=' }}</h2>      
    </div>
  `
})
export class AppComponent {
  num = 2 ;
}
