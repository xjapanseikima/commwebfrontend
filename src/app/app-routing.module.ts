import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'converter',
    component: ConverterComponent
  },
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
