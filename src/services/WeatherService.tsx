import {openweathermap , api} from "./BaseUrl";

export const Weather = {
  
    getWeatherByCountry : async (country : string) =>{
        return await openweathermap.get(`?q=${country}&units=metric`);
    },

    postWeatherHistory : async (data : object) =>{        
        return await api.post("/weather" , data);
    },

    getWeatherHistory : async () =>{        
        return await api.get("/weather");
    },
}