import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/global-components/nav-bar/nav-bar.component';
import { AfcsHomepageCarouselComponent } from './components/afcs-homepage-carousel/afcs-homepage-carousel.component';
import { TileButtonsComponent } from './components/tile-buttons/tile-buttons.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { Description1Component } from './components/description1/description1.component';
import { SliderComponent } from './components/slider/slider.component';
import { Description2Component } from './components/description2/description2.component';
import { VideoComponent } from './components/video/video.component';
import { Description3Component } from './components/description3/description3.component';
import { TileButtons2Component } from './components/tile-buttons2/tile-buttons2.component';
import { RegisterComponent } from './components/register/register.component';
import {SwiperModule} from 'angular2-useful-swiper';
import { FooterComponent } from './components/global-components/footer/footer.component';
import {InlineSVGModule} from 'ng-inline-svg';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { CareersPageComponent } from './views/careers-page/careers-page.component';
import { FindJobPageComponent } from './views/find-job-page/find-job-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { SocialPageComponent } from './views/social-page/social-page.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AfcsHomepageCarouselComponent,
    TileButtonsComponent,
    HomepageComponent,
    Description1Component,
    SliderComponent,
    Description2Component,
    VideoComponent,
    Description3Component,
    TileButtons2Component,
    RegisterComponent,
    FooterComponent,
    AboutPageComponent,
    CareersPageComponent,
    FindJobPageComponent,
    ContactPageComponent,
    SocialPageComponent,
    UnderConstructionComponent,
    RegisterCardComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    SwiperModule,
    InlineSVGModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
