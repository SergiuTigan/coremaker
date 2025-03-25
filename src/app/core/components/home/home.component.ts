import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  weatherData$ = this.weatherService.getWeatherData();

  constructor(private weatherService: WeatherService) {
  }
}
