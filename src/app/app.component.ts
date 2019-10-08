import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  @ViewChild('form',{static: true}) form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = "no";
  defaultCantry = "by"

  submitForm(){
    console.log('Submited!', this.form);    
  }

  clickRandEmail(){
    const randEmail = 'rand@email.com';
    // this.form.setValue({
    //   user:{
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // })
    this.form.form.patchValue({
      user: { email: randEmail }
    });
  }

}
