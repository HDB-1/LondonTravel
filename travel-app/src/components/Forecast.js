import React, { Component } from 'react';
import '../styling/Weather.css';

export default class Forecast extends Component {

    bearings = (wind_degree) => {
        if(wind_degree > 0 && wind_degree < 26) {
            return "N"
        } else if(wind_degree > 25 && wind_degree < 65) {
            return "NE"
        } else if(wind_degree > 65 && wind_degree < 115) {
            return "E"
        } else if(wind_degree > 115 && wind_degree < 155) {
            return "SE"
        } else if(wind_degree > 155 && wind_degree < 205) {
            return "S"
        } else if(wind_degree > 205 && wind_degree < 245) {
            return "SW"
        } else if(wind_degree > 245 && wind_degree < 295) {
            return "W"
        } else if(wind_degree > 295 && wind_degree < 335) {
            return "NW"
        } else if(wind_degree > 335 && wind_degree < 0) {
            return "N"
        }
    }

    convert_temp = (temp) => {
        let temp_c = (temp-273.15)
        let temp_final = (Math.round(temp_c * 100) / 100).toFixed(2);
        return temp_final
    }

    componentDidMount() {
        this.bearings()
        this.convert_temp()
    }

    render() {
        let { day } = this.props;
        let direction = this.bearings(day.wind.deg)
        let temp_final = this.convert_temp(day.main.temp)

        return (
            <div className="forecast-body">
                <h5>{day.dt_txt.slice(5,10)} | {day.dt_txt.slice(11,16)}</h5>
                <h5>{day.weather[0].main} - {day.weather[0].description}</h5>
                <h5>Temp: {temp_final} C</h5>
                <h5>Wind: {day.wind.speed}mph - {direction}</h5>
                <br/>
                <h3>---------------------</h3>
                <br/>
            </div> 

        )
    }
}
