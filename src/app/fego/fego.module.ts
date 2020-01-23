import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFegoComponent } from './register-fego/register-fego.component';
import { AboutFegoComponent } from './about-fego/about-fego.component';
import { MainFegoComponent } from './main-fego/main-fego.component';

@NgModule({
  declarations: [RegisterFegoComponent, AboutFegoComponent, MainFegoComponent],
  imports: [
    CommonModule
  ]
})
export class FegoModule { }
