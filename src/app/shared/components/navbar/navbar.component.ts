import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, tap } from 'rxjs';
import { WeatherService } from '../../../core/services/weather/weather.service';
import { GeolocationService } from '../../../core/services/geolocation/geolocation.service';

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
              private geolocationService: GeolocationService) {
  }

  ngAfterViewInit() {
    if(!this.searchInput) {
      return;
    }
    fromEvent(this.searchInput.nativeElement, 'input').pipe(debounceTime(500), tap((event: any) => {
      this.geolocationService.getCurrentLocationDetails(event.target.value);
    })).subscribe();
  }

}
