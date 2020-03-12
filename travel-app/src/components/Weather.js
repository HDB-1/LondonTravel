import React, { Component } from 'react';
import '../styling/Weather.css';
import Forecast from './Forecast';

export default class Weather extends Component {

    bearings = (wind_degree) => {
        if(wind_degree > 0 && wind_degree < 26) {
            return "Northerly"
        } else if(wind_degree > 25 && wind_degree < 65) {
            return "North Easterly"
        } else if(wind_degree > 65 && wind_degree < 115) {
            return "Easterly"
        } else if(wind_degree > 115 && wind_degree < 155) {
            return "South Easterly"
        } else if(wind_degree > 155 && wind_degree < 205) {
            return "Southerly"
        } else if(wind_degree > 205 && wind_degree < 245) {
            return "South Westerly"
        } else if(wind_degree > 245 && wind_degree < 295) {
            return "Westerly"
        } else if(wind_degree > 295 && wind_degree < 335) {
            return "North Westerly"
        } else if(wind_degree > 335 && wind_degree < 0) {
            return "Norhterly"
        }
    }

    convert_temp = (temp) => {
        let temp_c = (temp-273.15)
        let temp_final = (Math.round(temp_c * 100) / 100).toFixed(2);
        return temp_final
    }

    convert_datetime = (sunrise) => {
        let dateForChanging = new Date(sunrise);
        let newData = dateForChanging.toLocaleTimeString()
        // dateForChanging.setHours(12, 0, 0);
        return newData
    }

    componentDidMount() {
        this.bearings()
        this.convert_temp()
        this.convert_datetime()
    }

    render() {
        let { temp, feelslike, wind_mph, wind_degree, condition, condition_desc, sunrise, sunset, forecast } = this.props;
        let direction = this.bearings(wind_degree)
        let temp_final = this.convert_temp(temp)
        let feels_like_final = this.convert_temp(feelslike)
        let sunrise_final = this.convert_datetime(sunrise)
        let sunset_final = this.convert_datetime(sunset)
        return (
            <div>
                <div className="container">
                    <div className="weather-header">
                        <h2>Weather</h2>
                    </div>
                    <div className="weather-body">
                        <h3>{condition}</h3>
                        <h5>Condition: {condition_desc}</h5>
                        <h5>Temp: {temp_final} C</h5>
                        <h5>Feels like: {feels_like_final} C</h5>
                        <h5>Wind: {wind_mph}mph</h5>
                        <h5>Wind direction: {direction}</h5>
                        <h5>Sunrise: {sunrise_final}</h5>
                        <h5>Sunset: {sunset_final}</h5>
                    </div> 
                    <div className="weather-footer">
                        <p>Powered by <a href="https://openweathermap.org/" title="Free Weather API">OpenWeatherMap.org</a></p>
                    </div>
                </div>
                <br/>
                <div className="container">                
                    <div className="forecast-header">
                        <h2>Forecast</h2>
                    </div>
                    <ul>
                        {forecast.map((day, index) => {
                            return <Forecast key={index} day={day}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

