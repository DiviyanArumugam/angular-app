import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'vsm', loadChildren: './vsm/vsm.module#VsmModule' },
  { path: 'fego', loadChildren: './fego/fego.module#FegoModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
