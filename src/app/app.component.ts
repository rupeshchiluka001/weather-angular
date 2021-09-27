import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExtractDataService } from './services/extract-data.service';
import { WeatherData } from './weather-data';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import { ViewContainerRef } from '@angular/core';
import { PlaceHolderDirective } from './shared/place-holder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private dataService: ExtractDataService,
              private componentFactoryResolver: ComponentFactoryResolver) {}
  
  @ViewChild(PlaceHolderDirective) popUp!: PlaceHolderDirective;

  // this.popUp.createCon

  weatherData!: WeatherData;
  sub!: Subscription;
  city: string = "nizamabad";
  isDataRetrived: boolean = false;
  showLoading: boolean = false;
  isItDay: boolean = false;
  closeSub!: Subscription;

  ngOnInit(): void {
    this.getWeatherData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if ( this.closeSub ) {
      this.closeSub.unsubscribe();
    }
  }

  setVariable(): void {
    let bodyElement = document.body as HTMLBodyElement;
    let regexp = new RegExp('^[0-9]{2,3}d$');

    if ( regexp.test(this.weatherData.list[0].weather[0].icon) ) {
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
    return { "background-image": 
              (this.isItDay) ? 'url("assets/morning.jpg")' : 'url("assets/night.jpg")' };
  }
  
  getWeatherData(city: string = this.city) {
    this.sub = this.dataService.getData(city).subscribe({
      next: data => {
        this.showLoading = false;
        this.weatherData = data;
        this.isDataRetrived = true;
        this.setVariable();
      },
      error: err =>  {
        this.showLoading = false;
        this.showAlert(this.city);
      }
    });
  }

  showAlert(location: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertMsgComponent);
    this.popUp.ViewContainerRef.clear();
    const componentRef = this.popUp.ViewContainerRef.createComponent(componentFactory);
    componentRef.instance.locationName = location;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      this.popUp.ViewContainerRef.clear();
    });
  }

  onQuery(): Boolean {

    let value = (document.getElementById('search-box') as HTMLInputElement).value;

    if ( value ) {
      this.showLoading = true;
      this.city = value;
      this.getWeatherData(value);
    }
    return false;
  }

}
