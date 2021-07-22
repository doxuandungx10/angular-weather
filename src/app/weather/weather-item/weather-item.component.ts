import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from './weather-item';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})


export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem!: WeatherItem
  @Input() cityName: string = ''
  data: any = {
    main: {},
    isDay: null
  }
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    console.log(this.weatherItem.isDay)
  }

  getDayNight() {
    let sunsetTime = new Date(this.weatherItem.isDay * 1000)
    this.data.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.data.isDay = (currentDate.getTime() < sunsetTime.getTime());
    return this.data.isDay
  }
}

