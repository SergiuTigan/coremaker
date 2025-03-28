export const weatherCodeMap: { [key: number]: { icon: string; text: string } } = {
  0: { icon: '☀️', text: 'Sunny' },
  1: { icon: '🌤', text: 'Mostly Sunny' },
  2: { icon: '⛅', text: 'Partly Cloudy' },
  3: { icon: '☁️', text: 'Cloudy' },
  45: { icon: '🌫', text: 'Fog' },
  48: { icon: '🌫', text: 'Depositing Rime Fog' },
  51: { icon: '🌦', text: 'Light Drizzle' },
  53: { icon: '🌦', text: 'Moderate Drizzle' },
  55: { icon: '🌦', text: 'Dense Drizzle' },
  56: { icon: '🌧', text: 'Light Freezing Drizzle' },
  57: { icon: '🌧', text: 'Dense Freezing Drizzle' },
  61: { icon: '🌧', text: 'Slight Rain' },
  63: { icon: '🌧', text: 'Moderate Rain' },
  65: { icon: '🌧', text: 'Heavy Rain' },
  66: { icon: '🌧❄️', text: 'Light Freezing Rain' },
  67: { icon: '🌧❄️', text: 'Heavy Freezing Rain' },
  71: { icon: '🌨', text: 'Slight Snow Fall' },
  73: { icon: '🌨', text: 'Moderate Snow Fall' },
  75: { icon: '🌨', text: 'Heavy Snow Fall' },
  77: { icon: '❄️', text: 'Snow Grains' },
  80: { icon: '🌦', text: 'Slight Rain Showers' },
  81: { icon: '🌦', text: 'Moderate Rain Showers' },
  82: { icon: '🌦', text: 'Violent Rain Showers' },
  85: { icon: '🌨', text: 'Slight Snow Showers' },
  86: { icon: '🌨', text: 'Heavy Snow Showers' },
  95: { icon: '⛈', text: 'Thunderstorm' },
  96: { icon: '⛈', text: 'Thunderstorm with Slight Hail' },
  99: { icon: '⛈', text: 'Thunderstorm with Heavy Hail' }
};
