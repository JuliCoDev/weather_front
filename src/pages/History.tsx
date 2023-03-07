import { useEffect, useState } from "react";
import { WeatherResponseFromApi } from "../services/typesSrvices";
import { Weather } from "../services/WeatherService";
import CardWeather from "../components/CardWather/CardWeather";

function History(){
    const [infoHistory, setInfoHistory] = useState<any>([]);//Historico de consultas del clima 

    useEffect(() => {
    
        const fetchWeather = ( ) : Promise<WeatherResponseFromApi> => { 
        return Weather.getWeatherHistory()
            .then(response => response.data)
            .catch((error) => 
                console.log(error)
            )}

        fetchWeather()
            .then(setInfoHistory);
    
      },[])

    
    return(
        <div className="w-[90%] md:w-[70%]">
            {infoHistory.length && infoHistory.map((item : any) => {
                
                return( 
                    <div className="m-8" key={item.weather_id}>
                        <CardWeather info={item} title={item.city?.name} /> 
                    </div>
                )
            })
            }
        </div>
    )
}

export default History;