import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),
],
  exports: [ RouterModule ]

})
export class AppRoutingModule {

}
