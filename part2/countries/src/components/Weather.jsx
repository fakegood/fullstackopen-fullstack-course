import weatherService from "../services/WeatherService.jsx";
import {useEffect, useState} from "react";

const Weather = (props) => {
    const {lat, long, name} = props;
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState({});

    useEffect(() => {
        setWeather({});
        setLoading(true)
        weatherService.getCurrentWeather(lat, long).then(weather => {
            setWeather(weather);
            console.log(weather);
            setLoading(false);
        });
    }, [name]);

    if(loading){
        return <div>Loading weather...</div>;
    }

    return (
        <div>
            <h1>Weather in {name}</h1>
            <p>Temperature is {weather.current.temp_c}</p>
            <img src={`https:${weather.current.condition.icon}`} alt='weather icon' />
            <p>Wind is blowing at {weather.current.wind_kph}km/h towards {weather.current.wind_degree} degrees</p>
        </div>
    )
}

export default Weather;