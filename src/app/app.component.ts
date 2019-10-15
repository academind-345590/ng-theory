import { Component } from '@angular/core';
import { divTrigger, changeWidthTrigger } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    divTrigger,
    changeWidthTrigger
  ]
})
export class AppComponent {
  isVisible = false;
}
