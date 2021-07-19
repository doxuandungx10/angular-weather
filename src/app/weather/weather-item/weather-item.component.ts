import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from './weather-item';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})


export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem!: WeatherItem

  constructor() { }

  ngOnInit() {

  }

}

