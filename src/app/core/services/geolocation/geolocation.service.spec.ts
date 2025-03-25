import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GeolocationService } from './geolocation.service';
import { BaseService } from '../base/base.service';
import { ILocation } from '../../../shared/models/location.interface';

describe('GeolocationService', () => {
  let service: GeolocationService;
  let httpTestingController: HttpTestingController;
  let baseService: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeolocationService, BaseService]
    });
    service = TestBed.inject(GeolocationService);
    httpTestingController = TestBed.inject(HttpTestingController);
    baseService = TestBed.inject(BaseService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call baseService.get with correct parameters', () => {
    const query = 'London';
    const mockResponse: ILocation[] = [{
      'place_id': 258689701,
      'licence': 'Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright',
      'osm_type': 'relation',
      'osm_id': 65606,
      'lat': '51.4893335',
      'lon': '-0.14405508452768728',
      'class': 'boundary',
      'type': 'ceremonial',
      'place_rank': 25,
      'importance': 0.8820890292539882,
      'addresstype': 'city',
      'name': 'London',
      'display_name': 'London, Greater London, Anglia, Regatul Unit al Marii Britanii și al Irlandei de Nord',
      'address': {
        'city': 'London',
        'state_district': 'Greater London',
        'state': 'Anglia',
        'ISO3166-2-lvl4': 'GB-ENG',
        'country': 'Regatul Unit al Marii Britanii și al Irlandei de Nord',
        'country_code': 'gb'
      },
      'boundingbox': [
        '51.2867601',
        '51.6918741',
        '-0.5103751',
        '0.3340155'
      ]
    }];

    service.getCurrentLocationDetails(query).subscribe(locations => {
      expect(locations).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(req =>
      req.url === 'https://nominatim.openstreetmap.org/search' &&
      req.params.get('q') === query &&
      req.params.get('format') === 'json' &&
      req.params.get('limit') === '1' &&
      req.params.get('addressdetails') === '1'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should set the current location using setCurrentLocation', () => {
    const mockLocation: ILocation = {
      'place_id': 258689701,
      'licence': 'Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright',
      'osm_type': 'relation',
      'osm_id': 65606,
      'lat': '51.4893335',
      'lon': '-0.14405508452768728',
      'class': 'boundary',
      'type': 'ceremonial',
      'place_rank': 25,
      'importance': 0.8820890292539882,
      'addresstype': 'city',
      'name': 'London',
      'display_name': 'London, Greater London, Anglia, Regatul Unit al Marii Britanii și al Irlandei de Nord',
      'address': {
        'city': 'London',
        'state_district': 'Greater London',
        'state': 'Anglia',
        'ISO3166-2-lvl4': 'GB-ENG',
        'country': 'Regatul Unit al Marii Britanii și al Irlandei de Nord',
        'country_code': 'gb'
      },
      'boundingbox': [
        '51.2867601',
        '51.6918741',
        '-0.5103751',
        '0.3340155'
      ]
    };

    service.setCurrentLocation(mockLocation);

    service.currentLocation$.subscribe(location => {
      expect(location).toEqual(mockLocation);
    });
  });

  it('should emit the correct initial location', () => {
    const initialLocation = {} as ILocation;

    service.currentLocation$.subscribe(location => {
      expect(location).toEqual(initialLocation);
    });
  });

});
