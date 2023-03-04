
import { CityMarkerType } from "./typesMap";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import CityMarker from "./CityMarker";
import { Weather } from "../../services/Weather";
import { useEffect, useState } from "react";



const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const citiesMarkers: CityMarkerType[] = [
  {
    "name": "Miami",
    "coordinates": [-80.1918, 25.7617],
    "markerOffset": -15,      
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


function MapChart(){

  const [city , setCity ] = useState(""); 
  
  const selectCity = (name : string) =>{
    setCity(name);
    
  }

  useEffect(() => {
    if(city !== ""){
      Weather.getWeatherByCountry(city)
      .then((response) => {
          console.log(response.data.main)                
      })
      .catch((error) => 
          console.log(error)
      )
    }
  },[city])

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
          geographies.map((geo) => {
            
            return(
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
          )})
        }
      </Geographies>
      {citiesMarkers.map((city) => (
          <CityMarker key={city.name} city={city} selectCity={selectCity}/>
      ))}
    </ComposableMap>
  )
}

export default MapChart;