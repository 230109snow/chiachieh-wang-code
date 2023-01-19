import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  cityName : string = "";



  getData(){
   // this.cityName = (<HTMLInputElement>document.getElementById("city")).value ;
    
    console.log(this.cityName);
    console.log("Get data function called");
    /**https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */
  }

}
