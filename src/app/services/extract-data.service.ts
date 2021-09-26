import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../weather-data';

@Injectable({
  providedIn: 'root'
})
export class ExtractDataService {
  
  constructor(private http: HttpClient) {}

  getUrl(city: string): string {
    return `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&cnt=40&appid=25fbe48dea65d3e5de62278606235bc7`;
  }

  getData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.getUrl(city));
  }
}
