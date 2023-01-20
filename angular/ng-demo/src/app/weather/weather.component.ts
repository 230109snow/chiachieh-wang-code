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
  zipcode : string = "";
  weatherObj  : object[] = [];

  lat : number = 0;
  lon : number = 0;
  getData(){  
    console.log("getData function called")
   
    console.log(this.cityName);
    console.log(this.zipcode);
    if(this.cityName === "" && this.zipcode === "") alert("You must enter a city namr or zipcode !");
    const url = this.cityName ? `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${apikey}&units=imperial`:
                                `https://api.openweathermap.org/data/2.5/weather?zip=${this.zipcode},us&appid=${apikey}&units=imperial`;

    console.log(url);                           
    /**https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key} */
    
    this.http.get(url).subscribe( { next : (data : any) => {
      console.log(data);

      const weatherDetail = {
        city : data.name,
        country  : data.sys.country,
        description : data.weather[0].description,
        feel : data.main.feels_like,
        humidity : data.main.humidity,
        icon : `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,        
        pressure : data.main.pressure,        
        temp : data.main.temp,   
        windSpeed : data.wind.speed
      }


      console.log(weatherDetail);

      this.weatherObj.push(weatherDetail);

      console.log(this.weatherObj.length);

 
      }, error : (err) => {
        console.log(err);
        alert("Make sure you enter a valid city name or a valid zipcode")
      }
    })
    this.cityName="";
    this.zipcode=""
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