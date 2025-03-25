import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ILocation } from '../../../shared/models/location.interface';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  #baseUrl = 'https://nominatim.openstreetmap.org/search';
  location: BehaviorSubject<ILocation> = new BehaviorSubject({} as ILocation);
  currentLocation$: Observable<ILocation> = this.location.asObservable();

  constructor(private baseService: BaseService) {
  }

  getCurrentLocationDetails(query: string): Observable<ILocation[]> {
    const queryParams = {
      q: query,
      format: 'json',
      limit: 1,
      addressdetails: 1
    };
   return this.baseService.get<ILocation[]>(this.#baseUrl, queryParams);
  }

  setCurrentLocation(location: ILocation): void {
    this.location.next(location);
  }
}
