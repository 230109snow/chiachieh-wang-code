import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apikey } from './apikey';

@Component({
  selector: 'app-fetch-cat',
  templateUrl: './fetch-cat.component.html',
  styleUrls: ['./fetch-cat.component.css']
})


export class FetchCatComponent {
  // Dependency Injection
  // Instead of the component class itself instantiating the HttpClient class, we ask the framework to "inject" an instance (or a copy) of HttpClient
  // It's a design pattern for loose coupling
  // By setting httpClient private, we only allow this class to have access to it. If I were to set it public, the html page will also have access to that.
  constructor(private http: HttpClient) {}

  numCats : number = 0;
  catpics : any[] = [];
  now : number | Date = Date.now();
  arr = [3,4,5];
  getCats() : void {
    // send an http call to fetch cats
    const url = `https://api.thecatapi.com/v1/images/search?limit=${this.numCats}`

    // assembling and sending the get request
    this.http.get(url, {
      headers: {
        'x-api-key' : apikey
      }
    }).subscribe((data: any) => {
      // httpClient returns an observable to handle asynchronous request
      this.catpics = data;
      // for(let index in data) {
      //   this.catpics.push(data[index])
      // }
      console.log(data);
      // console.log(this.catpics);
      
    })
  }
  


  // One of lifecycle hooks
  // When this component mounts/renders for the first time, run whatever code is in here
  // Great place to run any setup code you may have for this component
  ngOnInit(): void {
    console.log(apikey);
  }

}
