import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { apikey } from './weatherKey';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  constructor(private http: HttpClient) {}
  cityName : string = "";



  getData(){

   // this.cityName = (<HTMLInputElement>document.getElementById("city")).value ;
    
    console.log(this.cityName);
    console.log("Get data function called");
    /**https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */
    // API Key = "55eb1dc1b9f70cc7e36c5a220ea1d9ab"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${apikey}&units=imperial`;
    this.http.get(url).subscribe( (data) => {
      console.log(data);
    })
  }

}
