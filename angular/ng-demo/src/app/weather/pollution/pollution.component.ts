import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent {
  @Input() airPollData : any = {};
  ngOnInit(){
    console.log("This Works air pollutions")
    console.log(this.airPollData);
  }
}
