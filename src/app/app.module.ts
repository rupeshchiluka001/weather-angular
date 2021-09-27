import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { StatsComponent } from './stats/stats.component';
import { CardsLayerComponent } from './cards-layer/cards-layer.component';
import { AtmosphereIconComponent } from './atmosphere-icon/atmosphere-icon.component';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import { PlaceHolderDirective } from './shared/place-holder.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StatsComponent,
    CardsLayerComponent,
    AtmosphereIconComponent,
    AlertMsgComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
