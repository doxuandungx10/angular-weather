import { FormControl } from '@angular/forms';
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
  @Input('change') checked!: boolean

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    console.log(this.checked)
  }

  getDayNight() {

    // console.log(this.weatherItem.sunSet)
    if (this.weatherItem.sunRise < new Date().valueOf() / 1000 && new Date().valueOf() / 1000 < this.weatherItem.sunSet) {
      // console.log('Day Time');
      return true
    } else {
      // console.log('Night Time');
      return false
    }
  }
}

