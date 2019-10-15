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
    ]),
    trigger('multi',[
      state('start', style({
        width: '150px',
        height: '150px',
        border: '4px solid black'
      })),
      state('end', style({
        width: '170px',
        height: '170px',
        backgroundColor: 'green'
      })),
      transition('start <=> end', [
        style({
          backgroundColor: 'red'
        }),
        animate(1500, style({
          backgroundColor: 'yellow'
        })),
        animate(1000, style({
          width: '200px',
          height: '200px'
        })),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {
 clickedDivState ='start';
 multiState = 'start';

 changeDivState(){
   this.clickedDivState = 'end';
   setTimeout(()=>{
     this.clickedDivState ='start';
   },3000)
 }
}
