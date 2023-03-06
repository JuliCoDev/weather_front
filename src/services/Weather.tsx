import axios from "axios";
const apiKeyWeather = "2ac6e41f9920f7cff87adb7facc5eca0";


export const Weather = {
  
    getWeatherByCountry : async (country : string) =>{
        return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKeyWeather}&units=metric`);
    },
}