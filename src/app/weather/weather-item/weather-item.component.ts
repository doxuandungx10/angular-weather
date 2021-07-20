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
  }

  getDayNight() {
    this._weatherService.searchWeatherData('hanoi')
      .subscribe(
        data => {
          const weatherItem = new WeatherItem('hanoi', data.weather[0].description.toUpperCase(), Math.round(data.main.temp - 273.15), data.main.humidity, Math.round(data.main.temp_max - 273.15), Math.round(data.main.temp_min - 273.15), Math.round(data.main.feels_like - 273.15))
          this.data = data
          // this._weatherService.addWeatherItem(weatherItem)
          let sunsetTime = new Date(this.data.sys.sunset * 1000)
          this.data.sunset_time = sunsetTime.toLocaleTimeString();
          let currentDate = new Date();
          this.data.isDay = (currentDate.getTime() < sunsetTime.getTime());
          this.data.isDay = false
        }
      )
    console.log(this.data.isDay)
  }
}

