import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-demo';
  path: string = "assets/images/Hangman0.png";
  alttext: string="NO IMAGE"
}
