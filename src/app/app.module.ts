import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AfcsHomepageCarouselComponent } from './components/afcs-homepage-carousel/afcs-homepage-carousel.component';
import { TileButtonsComponent } from './components/tile-buttons/tile-buttons.component';
import { HomepageComponent } from './views/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AfcsHomepageCarouselComponent,
    TileButtonsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
