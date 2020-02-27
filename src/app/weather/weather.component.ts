import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
city: FormControl;
wather: any;
  constructor(private serviceservise: ServiceService) { }

  ngOnInit() {
    this.city = new FormControl('');
  }
  weather() {
    this.serviceservise.gethttp(this.city.value).subscribe(data => {
      console.log(data);
      this.wather = data;
    });
  }

}
