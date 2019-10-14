import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CarsModule } from './cars-page/cars.module';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CarsModule,
    SharedModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
