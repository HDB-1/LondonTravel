import React, { Component } from 'react';
import '../styling/Weather.css';
import cloud from '../assets/cloud.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import sun_cloud from '../assets/sun-cloud.png';
import sunny from '../assets/sunny.png';
import thunder from '../assets/thunder.png';
import wind from '../assets/wind.png';
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

    pic_to_desc = () => {
        let descs = this.props.condition_desc
        if(descs && descs.includes("rain")) {
            return rain
        } else if(descs === "clear sky") {
            return sunny
        } else if(descs === "few clouds") {
            return sun_cloud
        } else if(descs === "scattered clouds") {
            return sun_cloud
        } else if(descs && descs.includes("cloud")) {
            return cloud
        } else if(descs && descs.includes("thunder")) {
            return thunder
        } else if(descs && descs.includes("wind")) {
            return wind
        } else if (descs && descs.includes("snow")) {
            return snow
        }
    }

    convert_temp = (temp) => {
        let temp_c = (temp-273.15)
        let temp_final = (Math.round(temp_c * 100) / 100).toFixed(1);
        return temp_final
    }

    // convert_datetime = (sunrise) => {
    //     let dateForChanging = new Date(sunrise);
    //     let newData = dateForChanging.toLocaleTimeString()
    //     dateForChanging.setHours(12, 0, 0);
    //     return newData
    // }

    componentDidMount() {
        this.bearings()
        this.convert_temp()
        this.pic_to_desc()
        // this.convert_datetime()
    }

    render() {
        let { temp, feelslike, wind_mph, wind_degree, condition, condition_desc, forecast } = this.props;
        let direction = this.bearings(wind_degree)
        let temp_final = this.convert_temp(temp)
        let feels_like_final = this.convert_temp(feelslike)
        let icon = this.pic_to_desc(condition_desc)
        
        return (
            <div>
                <div className="flex-container">
                    <div className="card">
                        <div className="weather-header">
                            <h2>Current Weather</h2>
                        </div>
                        <div className="weather-body">
                            <img id="icon" src={icon} alt="weather icon" />
                            <h5>{condition_desc}</h5>
                            <h5>Temp: {temp_final} C</h5>
                            <h5>Feels like: {feels_like_final} C</h5>
                            <h5>Wind: {wind_mph}mph</h5>
                            <h5>Wind direction: {direction}</h5>
                        </div> 
                        <div className="weather-footer">
                            <p>Powered by <a href="https://openweathermap.org/" title="Free Weather API">OpenWeatherMap.org</a><br/></p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="flex-container">
                    <div className="card">                
                        <div className="forecast-header">
                            <h2>Forecast</h2>
                        </div>
                        <ul>
                            {forecast.map((day, index) => {
                                return <Forecast key={index} day={day}/>
                            })}
                        </ul>
                        <div className="weather-footer">
                            <p>Powered by <a href="https://openweathermap.org/" title="Free Weather API">OpenWeatherMap.org</a><br/></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}