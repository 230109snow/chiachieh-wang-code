import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() weatherData : any = {};
  showInfo = false;
  showText = "+ Show forecast info";

  ngOnInit(){
    console.log("card created ! ")
    console.log(this.weatherData);

  }
  showForecast(){
    console.log("showe forecast working");

    this.showInfo = !this.showInfo;
    this.showText = this.showInfo? "- Hide forecast info" : "+ Show forecast info"
  
  }

}
