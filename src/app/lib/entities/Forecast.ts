export interface Forecast {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  };
}
