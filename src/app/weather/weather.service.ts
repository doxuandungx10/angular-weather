import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { WEATHER_ITEMS } from './weather-item/weather.data';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { WeatherItem } from './weather-item/weather-item';
// import { MapType } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }
  getWeatherItems() {
    return WEATHER_ITEMS
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem)
  }

  // getDayNight() {
  //   return 
  // }
  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get<any>('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=2518f44c4603f042bb2ff45520322286')
      .pipe(catchError((err) => {
        console.log('error caught in service')
        console.error(err);
        return throwError(err);
      }))
  }
}
