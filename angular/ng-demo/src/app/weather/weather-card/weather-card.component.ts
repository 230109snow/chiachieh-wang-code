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
  forecastData : object[] = [];
  showInfo = false;
  showText = "+ Show forecast info";

  
  

  @Output() delete = new EventEmitter<number>();

  deleteObj( id : number){
    this.delete.emit(id);
  }

  showForecast(){

    this.showInfo = !this.showInfo;
    this.showText = this.showInfo? "- Hide forecast info" : "+ Show forecast info"
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
}
