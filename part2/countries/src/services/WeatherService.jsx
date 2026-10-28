import axios from "axios";

// const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
// const baseUrl = 'https://api.openweathermap.org/data/4.0/onecall'
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = 'https://api.weatherapi.com/v1/current.json'

const getCurrentWeather = (lat, long) => {
    // const request = axios.get(`${baseUrl}/current?lat=${lat}&lon=${long}&appid=${weatherApiKey}`)
    const request = axios.get(`${baseUrl}?q=${lat},${long}&key=${weatherApiKey}`);
    return request.then(res => res.data);
}

export default {getCurrentWeather};