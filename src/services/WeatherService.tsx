import {openweathermap , api} from "./BaseUrl";

export const Weather = {
  
    getWeatherByCountry : async (country : string) =>{
        return await openweathermap.get(`?q=${country}&units=metric`);
    },

    postWeatherHistory : async (data : object) =>{
        // console.log(data)
        return await api.post("/weather" , data);
    },
}