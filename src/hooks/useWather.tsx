import { useState, useEffect} from "react";
import { Weather } from "../services/WeatherService";
import { WeatherResponseFromApi } from "../services/typesSrvices";

function useWeather(city : any){
    const [infoWeather, setInfoWeather] = useState({});//Información del clima por ciudad seleccionada

    useEffect(() => {
    
    
        if(city.name !== undefined){
          //GET Información del clima la cual se hizo clic
          const fetchWeather = ( ) : Promise<WeatherResponseFromApi> => { 
            return Weather.getWeatherByCountry(city.name)
                .then(response => response.data.main)
                .catch((error) => 
                    console.log(error)
                )}
    
            fetchWeather()
              .then(setInfoWeather);
          
            
            //POST Información del clima la cual se hizo clic
            Weather.postWeatherHistory({"cities_id" : city.cities_id , ...infoWeather})
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    
      },[city])

    return(
        {infoWeather , cityName : city.name}
    )
}

export default useWeather;