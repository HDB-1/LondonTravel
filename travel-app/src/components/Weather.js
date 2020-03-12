import React, { Component } from 'react';
import '../styling/Weather.css';

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
    
    convert_feelslike = (feelslike) => {
        let feelslike_c = (feelslike-273.15)
        let feels_like_final = (Math.round(feelslike_c * 100) / 100).toFixed(2);
        return feels_like_final
    }

    componentDidMount() {
        this.bearings()
        this.convert_temp()
        this.convert_feelslike()
    }

    render() {
        let { temp, feelslike, wind_mph, wind_degree, condition, condition_desc, forecast } = this.props;
        let direction = this.bearings(wind_degree)
        let temp_final = this.convert_temp(temp)
        let feels_like_final = this.convert_temp(feelslike)
        return (
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
                    <h5>Sunrise: {forecast.cod}</h5>
                </div> 
                <div className="weather-footer">
                    <p>Powered by <a href="https://openweathermap.org/" title="Free Weather API">OpenWeatherMap.org</a></p>
                </div>
            </div> 
        )
    }
}

