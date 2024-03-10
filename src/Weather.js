import React from 'react';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';

export default function Weather(props){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=a95c2c6739994ba4903e007ee817e7d1&units=metric`;
    axios.get(url).then(getTemperature);

    function getTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    alert(`The temperature for ${props.city} is ${temperature}°C`);
    }

    return (
        <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
    );
}
