import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from  './header/header.component'
import {BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SliderComponent } from './slider/slider.component'
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
