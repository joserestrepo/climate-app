export interface ClimateData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  };
}
