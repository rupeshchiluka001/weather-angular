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
        if (this.weatherData.list[0].dt <= this.weatherData.city.sunset) {
          this.isItDay = true;
        } else {
          this.isItDay = false;
        }
      },
      error: err => console.log(err)
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
