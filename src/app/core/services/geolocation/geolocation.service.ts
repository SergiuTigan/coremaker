import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  #baseUrl = 'https://nominatim.openstreetmap.org/search';

  constructor(private baseService: BaseService) { }

  getCurrentLocationDetails(query: string) {
    const queryParams = new URLSearchParams();
    queryParams.set('q', query);
    queryParams.set('format', 'json');
    queryParams.set('limit', '1');
    queryParams.set('addressdetails', '1');
    this.baseService.get(`${this.#baseUrl}/${queryParams}`).subscribe((data) => {
      console.log(data);
    });
  }
}
