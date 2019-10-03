import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerText = 'Создание своей директивы.';
  items = ['banana','apple','pear','tomato','cucumber'];
  current = 'banana' ;

  onClick(str: string){
    this.current = str;
  }
}
