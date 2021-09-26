import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-atmosphere-icon',
  templateUrl: './atmosphere-icon.component.html',
  styleUrls: ['./atmosphere-icon.component.css']
})
export class AtmosphereIconComponent implements OnInit, OnChanges {

  @Input() icon: string = "";

  ngOnInit(): void {
    this.insertIcon(this.icon);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertIcon(this.icon);
    console.log(this.icon);
  }

  insertIcon(icon: string): void {
    let atmosphereIcon = document.getElementById('atmosphereIconImage') as HTMLImageElement;
    atmosphereIcon.src = `assets/${icon}.svg`;
  }

}