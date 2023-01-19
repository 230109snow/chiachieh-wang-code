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
  weatherObj  : object[] = [];

  lat : number = 0;
  lon : number = 0;
  getData(){  
    console.log("getData function called")
   

   // this.cityName = (<HTMLInputElement>document.getElementById("city")).value ;
    
    console.log(this.cityName);
    console.log("Get data function called");
    /**https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */
    // API Key = "55eb1dc1b9f70cc7e36c5a220ea1d9ab"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${apikey}&units=imperial`;
    this.http.get(url).subscribe( (data : any) => {
      console.log(data);

      const weatherDetail = {
        city : data.name,
        country  : data.sys.country,
        temp : data.main.temp,
        feel : data.main.feels_like,
        humidity : data.main.humidity,
        pressure : data.main.pressure,
        icon : data.weather[0].icon,
        description : data.weather[0].description,   
        windSpeed : data.wind.speed
      }


      console.log(weatherDetail);

      this.weatherObj.push(weatherDetail);

      // console.log(this.weatherObj[0]);
      // this.lat = data.coord.lat;
      // this.lon = data.coord.lon;

      // console.log("lat : " + this.lat + " \nlon : " +this.lon);

      // this.getforecast(this.lat, this.lon)
      //  const obj : any = data;
      // // console.log( typeof data)
      // console.log(data.main.temp)
      // this.weatherObj.push(data);
      
      // // console.log(this.weatherObj.length)
      // // console.log(this.weatherObj)

      // console.log(obj.sys.country)
      // console.log(this.weatherObj[0].sys.country)

    
    })
  }
  // getforecast(lat: number, lon: number) {
  //   console.log("getForecast function called")
  //   const fUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&&appid=${apikey}&units=imperial`;
  //   this.http.get(fUrl).subscribe( (data : any) => {
  //     console.log(data);
     
     
  //     //  const obj : any = data;
  //     // // console.log( typeof data)
  //     // console.log(data.main.temp)
  //     // this.weatherObj.push(data);
      
  //     // // console.log(this.weatherObj.length)
  //     // // console.log(this.weatherObj)
  
  //     // console.log(obj.sys.country)
  //     // console.log(this.weatherObj[0].sys.country)
  
    
  //   })
  // }
}



