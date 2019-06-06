import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './views/homepage/homepage.component';
import {AboutPageComponent} from './views/about-page/about-page.component';
import {CareersPageComponent} from './views/careers-page/careers-page.component';
import {FindJobPageComponent} from './views/find-job-page/find-job-page.component';
import {ContactPageComponent} from './views/contact-page/contact-page.component';
import {SocialPageComponent} from './views/social-page/social-page.component';
import {LandingPageComponent} from './views/landing-page/landing-page.component';

const routes: Routes = [
  // {path: '', component: LandingPageComponent},
  {path: '', component: HomepageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'careers', component: CareersPageComponent},
  {path: 'find-a-job', component: FindJobPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'social', component: SocialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
