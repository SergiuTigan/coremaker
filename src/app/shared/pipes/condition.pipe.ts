import { Pipe, PipeTransform } from '@angular/core';
import { weatherCodeMap } from '../constants/weather-conditions.constant';

@Pipe({
  name: 'condition',
  standalone: true
})
export class ConditionPipe implements PipeTransform {
  weatherCodeMap = weatherCodeMap;

  transform(weatherCode: number, arg: 'icon' | 'text'): string {
    const condition = weatherCodeMap[weatherCode];
    if (condition) {
      return arg === 'icon' ? condition.icon : condition.text;
    } else {
      return '';
    }
  }

}
