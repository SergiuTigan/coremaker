import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { WeatherService } from '../../services/weather/weather.service';
import { Observable } from 'rxjs';
import { ConditionPipe } from '../../../shared/pipes/condition.pipe';
import { IDisplayData } from '../../../shared/models/display-data.interface';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    DatePipe,
    ConditionPipe
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentData$: Observable<IDisplayData> = this.weatherService.currentData$;

  constructor(private weatherService: WeatherService) {
  }
}
