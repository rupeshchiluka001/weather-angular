import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataList } from '../weather-data-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() oneDayData!: WeatherDataList;

  ngOnInit(): void {
  }

}
