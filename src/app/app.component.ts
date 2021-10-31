import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commwebfrontend';
  clickBtn($event: MouseEvent) {
    if ($event.altKey){
      console.log("altKey press")
    }
    console.log($event);
  }
}
