import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { StatsComponent } from './stats/stats.component';
import { CardsLayerComponent } from './cards-layer/cards-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StatsComponent,
    CardsLayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
