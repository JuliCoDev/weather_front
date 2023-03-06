
type Coordinates = [number, number];

export interface CityMarkerType {
    name: string;
    coordinates: Coordinates;
    markerOffset: number;
}

export type ColorCitiesData = {
    [key: string]: string;
  }


