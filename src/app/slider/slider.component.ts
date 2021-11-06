import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }
}
