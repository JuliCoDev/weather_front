
type Coordinates = [number, number];

export interface CityMarkerType {
    cities_id: number
    name: string
    coordinates: Coordinates
    markerOffset: number
}

export type ColorCitiesData = {
    [key: string]: string;
  }


