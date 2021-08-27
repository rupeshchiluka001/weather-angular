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

  weatherData!: WeatherData;
  sub!: Subscription;
  city: string = "nizamabad";
  isDataRetrived: boolean = false;

  constructor(private dataService: ExtractDataService) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  setBackground(): Object {
    return (this.weatherData.list[0].dt < this.weatherData.city.sunset) ?
      {
        "background-image": 'url("../assets/morning.jpg")'
      } : 
      {
        "background-image": 'url("../assets/night.jpg")'
      };
  }
  
  getWeatherData(city: string = "nizamabad") {
    this.sub = this.dataService.getData(city).subscribe({
      next: data => {
        this.weatherData = data;
        this.isDataRetrived = true;
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
