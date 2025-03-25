import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWeatherData } from '../../../shared/models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() {
  }

  getWeatherData(): Observable<IWeatherData> {
    return of({} as IWeatherData);

  }
}
