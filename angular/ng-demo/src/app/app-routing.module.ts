import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FetchCatComponent } from './fetch-cat/fetch-cat.component';
import { HangmanComponent } from './hangman/hangman.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path : 'calculator',
    component : CalculatorComponent
  },
  {
    path : 'hangman',
    component : HangmanComponent
  },
  {
    path : 'cats',
    component : FetchCatComponent
  },
  {
    path : 'weather',
    component : WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
