import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() dt_txt: string = "";
  @Input() city: string = "";
  @Input() temp: number = 0;
  @Input() maxTemp: number = 0;
  @Input() minTemp: number = 0;
  @Input() humidity: number = 0;
  @Input() windSpeed: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
