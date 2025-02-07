export interface weatherDataObject {
  main: {
    temp: number,
    pressure: number,
    humidity: number
  },
  coord: {
    lat: number,
    lon: number
  },
  wind: {
    speed: number,
    deg: number
  },
  sys: {
    country: string
  }
}