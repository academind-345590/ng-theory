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
      state('active', style({
        width: '170px',
        height: '170px',
        backgroundColor: 'pink'
      })),
      transition('start <=> end', [
        animate('1500ms ease-in')
      ]),
      transition('stert => active',[
        animate(400)
      ]),
      transition('active => end',[
        animate(400)
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
