import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, switchMap } from 'rxjs';
import { WeatherService } from '../../../core/services/weather/weather.service';
import { GeolocationService } from '../../../core/services/geolocation/geolocation.service';
import { ILocation } from '../../models/location.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDisplayData } from '../../models/display-data.interface';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('search') searchInput!: ElementRef;

  constructor(private weatherService: WeatherService,
              private geolocationService: GeolocationService,
              private snackbar: MatSnackBar) {
  }

  ngAfterViewInit() {
    if (this.searchInput && this.searchInput.nativeElement) {
      fromEvent(this.searchInput.nativeElement, 'input')
        .pipe(
          debounceTime(500),
          switchMap((event: any) => {
            return this.geolocationService.getCurrentLocationDetails(event.target.value).pipe(
              switchMap((locations: ILocation[]) => {
                if (locations.length === 0) {
                  this.snackbar.open('No location found', 'Close', {
                    duration: 2000
                  });
                  return [];
                }
                this.geolocationService.setCurrentLocation(locations[0]);
                return this.weatherService.getWeatherData(locations[0]);
              })
            );
          })
        )
        .subscribe((weatherData: IDisplayData) => {
          if (Object.keys(weatherData).length === 0) {
            this.snackbar.open('No weather data found', 'Close', {
              duration: 2000
            });
          }
          this.weatherService.setCurrentWeather(weatherData);
        });
    }
  }
}
