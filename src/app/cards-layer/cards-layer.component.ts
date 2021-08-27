import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataList } from '../weather-data-list';

@Component({
  selector: 'app-cards-layer',
  templateUrl: './cards-layer.component.html',
  styleUrls: ['./cards-layer.component.css']
})
export class CardsLayerComponent implements OnInit {

  @Input() list!: WeatherDataList[];

  ngOnInit(): void {
  }

}
