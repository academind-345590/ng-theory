import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarsService } from './cars.service';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent },
  { path: '', component: HomePageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
