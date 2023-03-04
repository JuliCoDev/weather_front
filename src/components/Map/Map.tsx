
import { CityMarkerType } from "./typesMap";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";





function MapChart(){
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  const citiesMarkers: CityMarkerType[] = [
    {
      "name": "Miami",
      "coordinates": [-80.1918, 25.7617],
      "markerOffset": -15
    },
    {
      "name": "Orlando",
      "coordinates": [-81.3792, 28.5383],
      "markerOffset": -15
    },
    {
      "name": "New York",
      "coordinates": [-74.0059, 40.7128],
      "markerOffset": -15
  }]; 

  return(
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [95, -40, 0],
        scale: 1000
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {citiesMarkers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  )
}

export default MapChart;