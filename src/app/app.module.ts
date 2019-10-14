import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './cars-page/car-page/car-page.component';
import { ColorDirective } from './shared/color.directive';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CarsService } from './cars.service';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent,
    CarPageComponent,
    ColorDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule    
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
