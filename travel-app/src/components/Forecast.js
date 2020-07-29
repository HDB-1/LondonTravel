import React, { Component } from 'react';
import cloud from '../assets/cloud.png';
import moon from '../assets/moon.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import sun_cloud from '../assets/sun-cloud.png';
import sunny from '../assets/sunny.png';
import thunder from '../assets/thunder.png';
import wind from '../assets/wind.png';
import '../styling/Weather.css';

export default class Forecast extends Component {

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
            return "Northerly"
        }
    }

    convert_temp = (temp) => {
        let temp_c = (temp-273.15)
        let temp_final = (Math.round(temp_c * 100) / 100).toFixed(1);
        return temp_final
    }

    pic_to_desc = (descs) => {
        // let descs = this.props.day.weather[0].description
        console.log(descs)
        if(descs.includes("rain")) {
            return "include thingy works"
        } else if(descs === "clear sky") {
            return "SUNNY ICON"
        }
    }
    // pic_to_desc = (descs) => {
    //     // let descs = this.props.day.weather[0].description
    //     console.log(descs)
    //     if(descs.includes("rain")) {
    //         return "include thingy works"
    //     } else if(descs === "clear sky") {
    //         return "SUNNY ICON"
    //     } else if(descs === "few clouds") {
    //         return "semi cloudy ICON"
    //     } else if(descs === "wbwokeen 3r" || "shkatered 24f" || "underthrow 34r") {
    //         return "cloudy!! ICON"
    //     } else if(descs.includes("cloud")) {
    //         return "the includes thing works"
    //     } else if(descs.includes("rain")) {
    //         return "rainy!! ICON"
    //     }
    // }

    componentDidMount() {
        this.bearings()
        this.convert_temp()
        this.pic_to_desc()
    }

    render() {
        let { day } = this.props;
        let direction = this.bearings(day.wind.deg)
        let temp_final = this.convert_temp(day.main.temp)
        // let icon = this.pic_to_desc(day.weather[0].description)
        let icon = this.pic_to_desc("little bit of rain not much")

        return (
            <div className="weather-body">
                <h5>{day.dt_txt.slice(11,16)} | {day.dt_txt.slice(5,10)}</h5>
                <h5>{day.weather[0].main} - {day.weather[0].description}</h5>
                <h5>Temp: {temp_final} C</h5>
                <h5>Wind: {day.wind.speed.toFixed(0)}mph - {direction}</h5>
                <h2>{icon}</h2>
                <br/>
                <h3>--------------------</h3>
                <br/>
            </div> 

        )
    }
}