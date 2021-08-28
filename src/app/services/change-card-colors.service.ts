import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeCardColorsService {

  changeBackgroundForCards(id: string) {
    console.log("hello, ", id);
    let rootSelector = document.querySelector(':root') as HTMLElement;
    let appCard = document.getElementsByTagName('id')[0];
    if (window.getComputedStyle(rootSelector).getPropertyValue("--IsItDay") === "true") {
      appCard.classList.toggle("day-colors");
    } else {
      appCard.classList.toggle("night-colors");
    }
  }

}
