export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: { description: string }[];
  wind: { speed: number };
}