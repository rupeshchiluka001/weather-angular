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

  constructor(private dataService: ExtractDataService) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  insertIcon(icon: string): void {
    let atmosphereIcon = document.getElementById("atmosphere-icon") as HTMLDivElement;
    atmosphereIcon.innerHTML = `<img src="./../assets/${icon}.svg" width="250px" height="auto">`;
  }
  
  getWeatherData(city: string = "nizamabad") {
    this.sub = this.dataService.getData(city).subscribe({
      next: data => {
        this.weatherData = data;
        this.insertIcon(this.weatherData.list[0].weather[0].icon);
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
