import { Component, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apikey } from '../weatherKey';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  constructor(private http: HttpClient) {}
  @Input() weatherData : any = {};
  @Input() id : number = -1;
  // Forecast 
  forecastData : object[] = [];
  showInfo = false;
  showText = "+ Show forecast info";
// Air pollution
  showAirP = false;
  pollutionText = "+ Show air pollution info";
  airData : object = {};

  // Delete component 

  @Output() delete = new EventEmitter<number>();

  deleteObj( id : number){
    this.delete.emit(id);
  }

  showForecast(){

    this.showInfo = !this.showInfo;
    this.showText = this.showInfo? "- Hide forecast info" : "+ Show forecast info";
    if(!this.showInfo) {
      this.forecastData.length = 0;
    }
    else{
      const fUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.weatherData.latitude}&lon=${this.weatherData.longitude}&&appid=${apikey}&units=imperial`;
      this.http.get(fUrl).subscribe( (data : any) => {
        for(let i=0 ; i<6; i++ ){
          const forecastDataObj = {
          timeText : data.list[i].dt_txt,
          temp : data.list[i].main.temp,
          icon :  `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
          }     
          this.forecastData.push(forecastDataObj);
        }
      })
    } 
  }
  showPollution(){
    console.log("Air pollution")
    this.showAirP = !this.showAirP;
    this.pollutionText = this.showAirP? "- Hide air pollution info" : "+ Show air pollution info";
    console.log(this.pollutionText);
    const airUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${this.weatherData.latitude}&lon=${this.weatherData.longitude}&appid=${apikey}`
    this.http.get(airUrl).subscribe( (data : any) => {
      console.log(data);
      console.log(data.list);
      console.log(data.list[0]);
      console.log(data.list[0].components);
      this.airData = data.list[0].components;
      console.log(this.airData);
      
      
      // this.airData = data[0].list[0].component;
      // console.log(this.airData);
    })


    // this.showAirP = !this.showAirP;
    // this.pollutionText = this.showAirP? "- Hide air pollution info" : "+ Show air pollution info";
    // console.log(this.pollutionText);
    /**http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key} 
     * main.aqi Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.
components
components.co ??oncentration of CO (Carbon monoxide), ??g/m3
components.no ??oncentration of NO (Nitrogen monoxide), ??g/m3
components.no2 ??oncentration of NO2 (Nitrogen dioxide), ??g/m3
components.o3 ??oncentration of O3 (Ozone), ??g/m3
components.so2 ??oncentration of SO2 (Sulphur dioxide), ??g/m3
components.pm2_5 ??oncentration of PM2.5 (Fine particles matter), ??g/m3
components.pm10 ??oncentration of PM10 (Coarse particulate matter), ??g/m3
components.nh3 ??oncentration of NH3 (Ammonia), ??g/m3
    */
  }
}
