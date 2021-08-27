import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atmosphere-icon',
  templateUrl: './atmosphere-icon.component.html',
  styleUrls: ['./atmosphere-icon.component.css']
})
export class AtmosphereIconComponent implements OnInit {

  @Input() icon: string = "";

  ngOnInit(): void {
    this.insertIcon(this.icon);
  }

  insertIcon(icon: string): void {
    let atmosphereIcon = document.getElementsByTagName('app-atmosphere-icon')[0] as HTMLElement
    atmosphereIcon.innerHTML = `<img src="./../assets/${icon}.svg" width="250px" height="auto">`;
  }

}