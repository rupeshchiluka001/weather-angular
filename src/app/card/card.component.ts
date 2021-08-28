import { Component, Input } from '@angular/core';
import { WeatherDataList } from '../weather-data-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() oneDayData!: WeatherDataList;
  @Input() isItDay: boolean = false;

}
