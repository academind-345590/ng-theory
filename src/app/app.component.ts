import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { resolve, reject } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email],[this.checkForEmail]),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no'),
    });
  }

  onSubmit(){
    console.log('Was Submited !', this.form);
  }

  charsCount = 6;

  checkForLength(control: FormControl){
    if(control.value.length < this.charsCount ){
      return {lengthError: true}
    };
    return null;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value == 'test@test'){
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      },3000)
    })
  }

}
