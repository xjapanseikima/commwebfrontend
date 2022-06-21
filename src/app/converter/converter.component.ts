import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  LatLon : any;
  Output : string = "nothing";
  constructor() { }

  ngOnInit(): void {
  }

  convert(value: String) {
    const strings = value.split(/\r?\n/);
    let str1 = "";
    let tgfLatLon = "";

    for (let i = 0; i < strings.length; i++) {
      let lat :number = Number(strings[i].replace(/\s\s+/g,"").split(/[ ,]+/)[0]);
      lat = deg_to_dms(lat)
      let lon :number = Number(strings[i].replace(/\s\s+/g,"").split(/[ ,]+/)[1]);
      lon = deg_to_dms(lon)
      console.log ("LAT:" + lat + "  " + "LON:"+ lon);
      tgfLatLon = tgfLatLon +((10000*lat)  + "/" + (10000*lon) + ".." + "\n") ;
    }
    this.Output =tgfLatLon;
  }
}

function deg_to_dms (deg: number) {
  var value : number

  if(deg < 0){
    deg = Math.abs(deg);
    var d = Math.floor (deg);
    var minfloat = (deg-d)*60;
    var m = Math.floor(minfloat);
    var secfloat = (minfloat-m)*60;
    var s = Math.round(secfloat);
    if (s==60) {
      m++;
      s=0;
    }
    if (m==60) {
      d++;
      m=0;
    }
    value = (d + 0.01*m + 0.0001*s) * -1;
  } else{
    deg = Math.abs(deg);
    var d = Math.floor (deg);
    var minfloat = (deg-d)*60;
    var m = Math.floor(minfloat);
    var secfloat = (minfloat-m)*60;
    var s = Math.round(secfloat);
    if (s==60) {
      m++;
      s=0;
    }
    if (m==60) {
      d++;
      m=0;
    }
    value = d + 0.01*m + 0.0001*s;
  }
  return value;
}
