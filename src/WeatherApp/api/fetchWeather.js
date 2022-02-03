import React from 'react';
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "f51fe5b0d68f16b543f4b77901a63ed1";

export const fetchWeather = async (query) =>{

    const { data } =await axios.get(URL , {
         params:{
             q: query,
             units: 'metric',
             APPID: API_Key,
         }
    })

    return data;

}



