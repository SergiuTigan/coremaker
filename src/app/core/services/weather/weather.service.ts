import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ILocation } from '../../../shared/models/location.interface';
import { BaseService } from '../base/base.service';
import { IDisplayData } from '../../../shared/models/display-data.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  #baseUrl = 'https://api.open-meteo.com/v1/forecast';
  currentData: BehaviorSubject<IDisplayData> = new BehaviorSubject<IDisplayData>({} as IDisplayData);
  currentData$: Observable<IDisplayData> = this.currentData.asObservable();

  constructor(private baseService: BaseService) {
  }

  getWeatherData(location: ILocation): Observable<IDisplayData> {
    const params = {
      latitude: location.lat,
      longitude: location.lon,
      current_weather: true,
      daily: 'relative_humidity_2m_mean'
    };
    return this.baseService.get<IDisplayData>(this.#baseUrl, params).pipe(map((data: any) => {
      return {
        cityName: location.display_name,
        weatherCode: data.current_weather.weathercode,
        temperature: `${data.current_weather.temperature}${data.current_weather_units.temperature}`,
        humidity: `${data.daily.relative_humidity_2m_mean[0]}${data.daily_units.relative_humidity_2m_mean}`,
        windSpeed: `${data.current_weather.windspeed}${data.current_weather_units.windspeed}`
      } as IDisplayData;

    }));
  }

  setCurrentWeather(weatherData: IDisplayData) {
    this.currentData.next(weatherData);
  }

}
