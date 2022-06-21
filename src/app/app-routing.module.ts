import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
