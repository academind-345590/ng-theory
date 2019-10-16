import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { ColorDirective } from './color/color.directive';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
