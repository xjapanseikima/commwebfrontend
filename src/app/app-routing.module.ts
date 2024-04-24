import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
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
