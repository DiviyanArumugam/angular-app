import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFegoComponent } from './main-fego/register-fego/register-fego.component';
import { AboutFegoComponent } from './main-fego/about-fego/about-fego.component';
import { MainFegoComponent } from './main-fego/main-fego.component';
import { Routes, RouterModule } from '@angular/router';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

const routes: Routes = [
  { path: 'main', component: MainFegoComponent },
  { path: 'about', component: AboutFegoComponent },
  { path: 'register', component: RegisterFegoComponent },
];

@NgModule({
  declarations: [RegisterFegoComponent, AboutFegoComponent, MainFegoComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    ScrollDispatchModule,
  ]
})
export class FegoModule { }
