import axios from 'axios';

const apiKey = "2ac6e41f9920f7cff87adb7facc5eca0";
const apiUrlBack = "http://localhost:8000/api";
const apiWather = "https://api.openweathermap.org/data/2.5/weather";

export const openweathermap = axios.create({
  baseURL: apiWather,
  params: {
    appid: apiKey,
  },
});

export const api = axios.create({
    baseURL: apiUrlBack,
});