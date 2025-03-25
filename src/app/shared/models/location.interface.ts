export interface ILocation {
  address: {
    'ISO3166-2-lvl4': string;
    city: string;
    country: string;
    country_code: string;
    state: string;
    state_district: string;
  };
  addresstype: string;
  boundingbox: string[]; // Or number[] if the values are always numeric
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;

}
