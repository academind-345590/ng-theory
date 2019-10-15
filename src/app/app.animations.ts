import { trigger, state, style, transition, animate } from '@angular/animations';

export const divTrigger = trigger('divTrigger',[
  //void => *
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(1000, style({
      opacity: 1
    }))
  ]),
  // * => void
  transition(':leave', animate(500, style({
    opacity: 0
  })))
]);

export const changeWidthTrigger = trigger('changeWidthTrigger',[
  transition('* => *',[
    animate(1000, style({
      width: '10px'
    })),
    animate(1000, style({
      // only width, height reverse state
      width: '*'
    }))
  ])
])