import { ICurrentWeatherUnits } from './current-weather-units.interface';
import { ICurrentWeather } from './current-weather.interface';

export interface IWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: ICurrentWeatherUnits;
  current_units?: Partial<ICurrentWeatherUnits>;
  current?: Partial<ICurrentWeather>;
  current_weather: ICurrentWeather;
}

