import { Component, OnInit } from '@angular/core';
import { WEATHER_ITEMS } from '../weather-item/weather.data';
import { WeatherItem } from '../weather-item/weather-item';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[] = WEATHER_ITEMS
  constructor() { }

  ngOnInit() {
    this.weatherItems = WEATHER_ITEMS;
    console.log(this.weatherItems)
  }

}
