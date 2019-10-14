import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'orange',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'green',
        width: '300px',
        height: '300px'
      })),
      transition('start => end', [
        animate(1500)
      ]),
      transition('end => start', [
        animate('800ms 0.5s ease-out')
      ])
    ])
  ]
})
export class AppComponent {
 clickedDivState ='start';

 changeDivState(){
   this.clickedDivState = 'end';
   setTimeout(()=>{
     this.clickedDivState ='start';
   },3000)
 }
}
