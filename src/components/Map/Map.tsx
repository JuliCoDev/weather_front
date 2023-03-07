
import { CityMarkerType } from "./typesMap";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import CityMarker from "./CityMarker";
import { Weather } from "../../services/WeatherService";
import { useEffect, useState } from "react";
import ModalMap from "../Modal/ModalMap";
import { WeatherResponseFromApi  } from "../../services/typesSrvices";
import { ColorCitiesData } from "./typesMap";
import ContainerMap from "./styleComponents/ContainerMap";
import { Cities } from "../../services/CityServices";
import useWeather from "../../hooks/useWather";


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";//Estados de estados unidos


function MapChart(){

  const [city , setCity ] = useState<any>(""); 

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {infoWeather, cityName} = useWeather(city)//Información del clima por ciudad seleccionada
  const [citiesMarkers, setCitiesMarkers]= useState<any>([]);

  useEffect(() => {
    
    const fetchCities = ( ) : Promise<CityMarkerType> => { 
        return Cities.getCities()
            .then((response)=> response.data)
            .catch((error) => 
                console.log(error)
            )}

        fetchCities()
          .then(setCitiesMarkers);
  },[])

 





  const handleModal = (isOpen : boolean) => {
    setModalIsOpen(isOpen);
  }
  
  const selectCity = (nameCity : string, idCity : number) =>{    
    setCity({"name" : nameCity , "cities_id": idCity});
    
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
        {citiesMarkers.length > 0 && citiesMarkers.map((city : any) => (
            <CityMarker key={city.cities_id} city={city} selectCity={selectCity} openModal={handleModal}/>
        ))}
      </ComposableMap>

      {modalIsOpen &&
        <ModalMap modalIsOpen={modalIsOpen} closeModal={handleModal} infoModal={infoWeather} city={cityName}/>      
      }
      


    </ContainerMap>
  )
}

export default MapChart;