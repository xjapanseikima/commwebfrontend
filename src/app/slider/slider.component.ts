import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    showNavigationArrows = true;
    interval= 200
    pauseOnHover= true
  ngOnInit(): void {
  }
}
