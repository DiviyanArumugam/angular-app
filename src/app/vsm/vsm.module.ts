import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterVsmComponent } from './main-vsm/register-vsm/register-vsm.component';
import { AboutVsmComponent } from './main-vsm/about-vsm/about-vsm.component';
import { Routes, RouterModule } from '@angular/router';
import { MainVsmComponent } from './main-vsm/main-vsm.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'main', component: MainVsmComponent },
  { path: 'about', component: AboutVsmComponent },
  { path: 'register', component: RegisterVsmComponent },
];

@NgModule({
  declarations: [
    RegisterVsmComponent,
    AboutVsmComponent,
    MainVsmComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class VsmModule { }
