import React, { Component } from 'react';
import '../styling/Weather.css';

export default class Weather extends Component {

    bearings = (wind_degree) => {
        if(wind_degree > 335 && wind_degree < 26) {
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
        }
      }
    componentDidMount() {
        this.bearings()
    }

    render() {
        let { temp_c, feelslike_c, wind_mph, wind_degree, condition } = this.props;
        let direction = this.bearings(wind_degree)
        return (
            <div className="container">
                <div className="weather-header">
                    <h2>Weather</h2>
                </div>
                <div className="weather-body">
                    <h3>{condition}</h3>
                    <h5>Temp: {temp_c}</h5>
                    <h5>Feels like: {feelslike_c}</h5>
                    <h5>Wind: {wind_mph}</h5>
                    <h5>Wind direction: {direction}</h5>
                </div> 
                <div className="weather-footer">
                    <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></p>
                </div>
            </div> 
        )
    }
}
