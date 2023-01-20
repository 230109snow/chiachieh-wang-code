import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FetchCatComponent } from './fetch-cat/fetch-cat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './calculator/calculator.component';
import { HangmanComponent } from './hangman/hangman.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FetchCatComponent,
    CalculatorComponent,
    HangmanComponent,
    WeatherComponent,
    WeatherCardComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
