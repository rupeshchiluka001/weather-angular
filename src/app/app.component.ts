import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExtractDataService } from './services/extract-data.service';
import { WeatherData } from './weather-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private dataService: ExtractDataService) {}

  weatherData!: WeatherData;
  sub!: Subscription;
  city: string = "nizamabad";
  isDataRetrived: boolean = false;
  isItDay: boolean = false;

  ngOnInit(): void {
    this.getWeatherData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  setVariable(): void {
    let bodyElement = document.body as HTMLBodyElement;
    if (this.weatherData.list[0].dt <= this.weatherData.city.sunset) {
      this.isItDay = true;
      bodyElement.classList.remove("night-background");
      bodyElement.classList.add("day-background")
    } else {
      this.isItDay = false;
      bodyElement.classList.remove("day-background");
      bodyElement.classList.add("night-background")
    }
  }

  setBackground(): Object {
    return (this.isItDay) ?
      { "background-image": 'url("assets/morning.jpg")' }
      : 
      { "background-image": 'url("assets/night.jpg")' };
  }
  
  getWeatherData(city: string = this.city) {
    this.sub = this.dataService.getData(city).subscribe({
      next: data => {
        this.weatherData = data;
        this.isDataRetrived = true;
        this.setVariable();
      },
      error: err =>  {
        alert("City Not Found in Database :(\nPlease check the spelling or Search Another city!");
      }
    });
  }

  onQuery(e: Event): void {
    let value = (document.getElementById('search-box') as HTMLInputElement).value;
    if (value && value !== this.city) {
      this.city = value;
      this.getWeatherData(value);
    }
  }
}
