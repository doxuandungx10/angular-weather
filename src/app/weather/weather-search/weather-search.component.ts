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

  onSubmit(f: NgForm) {
    // console.log(f.value.location)
    this._weatherService.searchWeatherData(f.value.location)
      .subscribe(
        data => {
          const weatherItem = new WeatherItem(data.name, data.weather[0].description.toUpperCase(), Math.round(data.main.temp - 273.15))
          this._weatherService.addWeatherItem(weatherItem)
        }
      )
  }

  onSearchLocation(cityName: string) {
    this.searchStream
      .next(cityName)
  }
  ngOnInit() {
    this.searchStream
    switchMap((input: string) => this._weatherService.searchWeatherData(input))
      .subscribe(
        data => console.log(data)
      )
  }
}
