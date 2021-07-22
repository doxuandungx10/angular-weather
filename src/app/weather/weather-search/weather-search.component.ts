import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { WeatherItem } from '../weather-item/weather-item';
import { WeatherService } from '../weather.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  private searchStream = new Subject<string>()
  constructor(private _weatherService: WeatherService) { }
  data: any = {
    main: {},
    isDay: true
  }
  onSubmit(f: NgForm) {
    this._weatherService.searchWeatherData(f.value.location)
      .subscribe(
        data => {
          const weatherItem = new WeatherItem(data.name, data.weather[0].description.toUpperCase(), Math.round(data.main.temp - 273.15), data.main.humidity, Math.round(data.main.temp_max - 273.15), Math.round(data.main.temp_min - 273.15), Math.round(data.main.feels_like - 273.15), data.sys.sunset)
          this._weatherService.addWeatherItem(weatherItem)
        }
      )
    // console.log(this.data.sys.sunset)
  }

  onSearchLocation(cityName: string) {
    this._weatherService.searchWeatherData(cityName)
      .subscribe(
        data => {
          this.data = data
        }
      )
  }
  ngOnInit() {

  }
}
