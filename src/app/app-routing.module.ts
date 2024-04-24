import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
],
})
export class AppRoutingModule {

}
