import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './views/homepage/homepage.component';
import {AboutPageComponent} from './views/about-page/about-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
