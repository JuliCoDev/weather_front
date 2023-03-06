
import { CityMarkerType } from "./typesMap";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import CityMarker from "./CityMarker";
import { Weather } from "../../services/Weather";
import { useEffect, useState } from "react";
import ModalMap from "../Modal/ModalMap";
import { WeatherResponseFromApi  } from "../../services/typesSrvices";
import { ColorCitiesData } from "./typesMap";
import ContainerMap from "./styleComponents/ContainerMap";



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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [infoWeather, setInfoWeather] = useState({});

  useEffect(() => {
    if(city !== ""){
      const fetchWeather = ( ) : Promise<WeatherResponseFromApi> => { 
      return Weather.getWeatherByCountry(city)
            .then(response => response.data.main)
            .catch((error) => 
                console.log(error)
            )}

      fetchWeather()
        .then(setInfoWeather)
    }

  },[city])


  const handleModal = (isOpen : boolean) => {
    setModalIsOpen(isOpen);
  }
  
  const selectCity = (name : string) =>{
    console.log(name);
    setCity(name);
    
  }

  const COLOR_CITIES : ColorCitiesData = {
    "New York" : "#ffe9a1c9",
    "Florida" : "#ffa4a1c9",

  }

  const  COLOR_CITIES_DEFAULT ="#216b2181";

  

  return(
    <ContainerMap>
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
                  fill={ COLOR_CITIES[geo.properties.name] || COLOR_CITIES_DEFAULT}
                  stroke="#ffffff"
                />
            )})
          }
        </Geographies>
        {citiesMarkers.map((city) => (
            <CityMarker key={city.name} city={city} selectCity={selectCity} openModal={handleModal}/>
        ))}
      </ComposableMap>

      {modalIsOpen &&
        <ModalMap modalIsOpen={modalIsOpen} closeModal={handleModal} infoModal={infoWeather}/>      
      }
      


    </ContainerMap>
  )
}

export default MapChart;